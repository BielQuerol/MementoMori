import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import SenderForm from "./Senderform"
import "./Helpothersdetail.css";

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
      .get(`${process.env.REACT_APP_API_URI}/api/helprequest/${params.requestId}`, {withCredentials: true})
      .then((responseFromApi) => {
        console.log(responseFromApi)
        const theHelpRequest = responseFromApi.data;
        const { _id, title, description, city} = theHelpRequest;
        this.setState({ _id, title, description, city});
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
       
        
      </div>
      </div>
      
      <Link style={{ textDecoration: "none" }} to={`/helpothersdetail/senderform/${this.state._id}`}>
          <button className="btngrey"><h2>I can help</h2></button>
        </Link>
       <Link style={{ textDecoration: "none" }} to={"/helpotherslist"}><button className="btngrey"><h2>Help requests</h2></button></Link>
      </div></div></div>
    );
  }
}

export default withAuth(HelpOthersDetail);
