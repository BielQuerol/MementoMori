import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import axios from "axios";
import service from "../api/service";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      userImage: "",
    };
  }
  componentDidMount() {
    axios
    .get(`http://localhost:4000/api/user`)
    .then((response) => {
      const user = response.data
      this.setState (user)
    }).catch((err) => {
      
    });
  }

  handleFormSubmit = (event) => {
    const email = this.state.email;
    const password = this.state.password;
    const userImage = this.state.userImage;

    event.preventDefault();

    axios
      .put(`http://localhost:4000/api/users/${this.props.theUser._id}`, {
        email,
        password,
        userImage,
      })
      .then(() => {
        this.props.history.push("/userindex/edit");
      })
      .catch((error) => console.log(error));
  };

  handleChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleFileUpload = (event) => {
    console.log("The file to be uploaded is: ", event.target.files[0]);
    const uploadData = new FormData();
    uploadData.append("userImage", event.target.files[0]);

    service
      .handleUpload(uploadData)
      .then((response) => {
        this.setState({ userImage: response.secure_url });
      })
      .catch((err) => {
        console.log("Error while uploading the file: ", err);
      });
  };

  render() {
    return (
      <div>
        <div className="wrapform">
          <h2>Edit profile</h2>
          <form on Submit={this.handleFormSubmit}>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={(e) => this.handleChangeEmail(e)}
            />
            <label>Password:</label>
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={(e) => this.handleChangePassword(e)}
            />
            <label>Profile Picture</label>
            <input
              type="file"
              name="userImage"
              value={this.state.userImage}
              onChange={(e) => this.handleFileUpload(e)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
export default withAuth(EditUser);
