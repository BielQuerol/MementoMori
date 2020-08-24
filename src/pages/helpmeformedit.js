import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import HelpMeForm from "./helpmeform";
import "./helpmeformedit.css";

class HelpMeFormEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.theHelpRequest.title,
            description: this.props.theHelpRequest.description,
            city: this.props.theHelpRequest.city
        };
    }

    handleFormSubmit = event => {
        const title = this.state.title;
        const description = this.state.description;
        const city = this.state.city

        event.preventDefault();

        axios
        .put(`http://localhost:4000//api/helprequest/${this.props.theHelpRequest._id}`, {
            title,
            description,
            city,
        })
        .then(() => {
            this.props.gettheHelpRequest();
            this.props.history.push("/helpotherslist");
        })
        .catch(error => console.log(error));
    };

    handleChangeTitle = event => {
        this.setState({
            title: event.target.value
        });
    };

    handleChangeDescription = event => {
        this.setState({
            description: event.target.value
        });
    };

    handleChangeCity = event => {
        this.setState({
            city: event.target.value
        });
    };
 // DELETE PROJECT:
 deleteHelpRequest = () => {
    const { params } = this.props.match;
    axios.delete(`http://localhost:4000/api/helprequest/${params.id}`)
    .then( () =>{
        this.props.history.push("/helpotherslist"); 

    })
    .catch((err)=>{
        console.log(err)
    })
  }
    render() {
    return (
        <div>
            <hr/>
            <div className="wrapform">
            <h3>Edit form</h3><h3>Edit form</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={e => this.handleChangeTitle(e)}
          />
          <label>Description:</label>
          <textarea
            name="description"
            value={this.state.description}
            onChange={e => this.handleChangeDesc(e)}
          />
          <label>City:</label>
          <input type="text"
            name="city"
            value={this.state.description}
            onChange={e => this.handleChangeDesc(e)}
          />
          <input type="submit" value="Submit" />
          </form></div>
        
        <button className="btngrey" onClick={() => this.deleteHelpRequest()}>Delete Help Request</button>
        <br/>
        <Link style={{ textDecoration: 'none' }} to={"/helpotherslist"}>Back to help requests</Link>
      </div>
    );
  }
}



export default withAuth(HelpMeFormEdit);
  