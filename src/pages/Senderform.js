import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

class SenderForm extends Component {
  constructor(props) {
    super(props);
    this.state = { senderTel: "",
      senderEmail: "",
      message: ""};
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const senderTel = this.state.senderTel;
    const senderEmail = this.state.senderEmail;
    const message = this.state.message;
    
    const { params } = this.props.match;
    const helprequestID = this.props.requestId;
    axios
      .post(`${process.env.REACT_APP_API_URI}/api/sendhelpform/${params.requestId}`, {
       senderTel,
       senderEmail,
       message,
      }, {withCredentials: true})
      .then(() => {
        
      this.props.history.push(`/userindex`);
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
      <div className="wrapform">
        <h2>Sender Form</h2>
        <form onSubmit={this.handleFormSubmit}>
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
      </div></div>
    );
  }
}

export default withAuth(SenderForm);
