import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import HelpMeForm from "./Helpmeform";
import "./Helpmeformedit.css";

class HelpMeFormEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description,
      city: this.props.city,
    };
  }

  handleFormSubmit = (event) => {
    const title = this.state.title;
    const description = this.state.description;
    const city = this.state.city;

    event.preventDefault();
    const { params } = this.props.match;
    axios
    .put(`${process.env.REACT_APP_API_URI}/api/helprequest/${params.requestId}`, {
          title,
          description,
          city,
        } , {withCredentials: true})
      .then(() => {
       
        this.props.history.push("/helpotherslist");
      })
      .catch((error) => console.log(error));
  };

  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleChangeDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  handleChangeCity = (event) => {
    this.setState({
      city: event.target.value,
    });
  };
  // DELETE PROJECT:
  deleteHelpRequest = () => {
    const { params } = this.props.match;
    
    axios
      .delete(`${process.env.REACT_APP_API_URI}/api/helprequest/${params.requestId}`,{withCredentials: true} )
      .then(() => {
        this.props.history.push("/helpotherslist");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <div className="wrapform">
          <h2>Edit form</h2>
          <form onSubmit={this.handleFormSubmit}>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={(e) => this.handleChangeTitle(e)}
            />
            <label>Description:</label>
            <textarea
              name="description"
              value={this.state.description}
              onChange={(e) => this.handleChangeDescription(e)}
            />
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={this.state.city}
              onChange={(e) => this.handleChangeCity(e)}
            />
            <h2><input type="submit" value="Submit" /></h2>
          </form>
        </div>

        <button className="btngrey" onClick={() => this.deleteHelpRequest()}>
         <h2>Delete</h2>
        </button>
       
      </div>
    );
  }
}

export default withAuth(HelpMeFormEdit);
