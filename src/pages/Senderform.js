import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

class SenderForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", description: "", isShowing: false };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    const city = this.state.city;
    const helprequestID = this.props.theHelpRequest._id;
    const { params } = this.props.match;
    axios
      .post(`http://localhost:4000/api/sendhelpform/${params.requestId}`, {withCredentials: true} , {
        title,
        description,
        city,
        helprequestID,
      })
      .then(() => {
        this.props.getTheHelpRequest();
        this.setState({ title: "", description: "", city: "" });
      })
      .catch((error) => console.log(error));
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h2>Sender Form</h2>
        <form on Submit={this.handleFormSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={(e) => this.handleChange(e)}
          />

          <label>Email:</label>
          <input
            type="text"
            name="senderEmail"
            value={this.state.senderEmail}
            onChange={(e) => this.handleChange(e)}
          />

          <label>Phone number:</label>
          <input
            type="text"
            name="senderTel"
            value={this.state.senderTel}
            onChange={(e) => this.handleChange(e)}
          />

          <label>How can I help?</label>
          <textarea
            name="message"
            value={this.state.message}
            onChange={(e) => this.handleChange(e)}
          />

          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default withAuth(SenderForm);
