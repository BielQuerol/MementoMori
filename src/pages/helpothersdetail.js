import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import SenderForm from "./Senderform"
import "./helpothersdetail.css"
class HelpOthersDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getSingleHelpRequest();
  }

  getSingleHelpRequest = () => {
console.log("Aquí", this.props)
    const { params } = this.props.match;
    //el id de URL vendrá de this.props.match.params.requestId
    axios
      .get(`http://localhost:4000/api/helprequest/${params.requestId}`, {withCredentials: true})
      .then((responseFromApi) => {
        console.log(responseFromApi)
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
        <Link style={{ textDecoration: "none" }} to={"/helpotherslist"}>Back to help requests list</Link>
        <Link style={{ textDecoration: "none" }} to={"/helpothersdetail/senderform"}>
          <button className="btngrey">I can help</button>
        </Link>
      </div>
      </div>
      </div></div></div>
    );
  }
}

export default withAuth(HelpOthersDetail);
