import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "../lib/AuthProvider";
import "./helpmeform.css";

class HelpMeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", description: "", city: "" };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    const city = this.state.city;
    axios
      .post("http://localhost:4000/api/helprequest", {
        title,
        description,
        city,
      })
      .then(() => {
            // this.props.getData();
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
      <div className="wrapform">
      <h2>Help me form</h2>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={(e) => this.handleChange(e)}
          />
          <label>Description:</label>
          <textarea
            name="description"
            value={this.state.description}
            onChange={(e) => this.handleChange(e)}
          />
          <label>City:</label>
          <input type="text" name="city"
          value={this.state.city}
          onChange={(e) => this.handleChange(e)}
          />

          <input type="submit" value="Submit" />
        </form></div>
      </div>
    );
  }
}
export default withAuth(HelpMeForm);
