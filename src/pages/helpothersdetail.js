import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import SenderForm from "./Senderform"

class HelpOthersDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getSingleHelpRequest();
  }

  getSingleHelpRequest = () => {
    const { params } = this.props.match;
    axios
      .get(`http://localhost:4000/api/helprequest/${params.id}`)
      .then((responseFromApi) => {
        const theHelpRequest = responseFromApi.data;
        this.setState(theHelpRequest);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
      <div className="container">
      <div className="heading">
      <div className="row">
      <div className="card">
      <div className="card-header">
        <h2>{this.state.title}</h2></div>
        <div className="card-body">
        <p>{this.state.description}</p></div>
        <div className="card-bottom"><p>{this.state.city}</p></div>
        <Link to={"/helpotherslist"}>Back to help requests list</Link>
        <Link to={"/helpothersdetail/senderform"}>
          <button className="btngrey">I can help</button>
        </Link>
      </div>
      </div>
      </div></div></div>
    );
  }
}

export default withAuth(HelpOthersDetail);
