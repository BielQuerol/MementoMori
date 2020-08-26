import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Userprofile.css";
class Userprofile extends Component {
    constructor(props){
    super(props);
    this.state = {
        email: "",
        password: "",
        userImage: "",
        helpRequests:"",
        helpOthersRequests:"",
      };
    }
    componentDidMount() {
      axios
      .get(`${process.env.REACT_APP_API_URI}/api/user` , {withCredentials: true})
      .then((theResponse) => {
        const { email, password, userImage, helpRequests, helpOthersRequests} = theResponse;
         this.setState ({ email, password, userImage, helpRequests, helpOthersRequests});
      })
      .catch((err) => {
        console.log(err);
      });
    }; 
      render() {
        return (
          <div> <div className="container">
          <div className="heading">
          <div className="row">
          <div className="card">
          <div className="card-header">
          <div className="card-body">
          <img src={this.state.userImage} alt="profilepic"></img></div>
          <div className="card-header">
            <h4>{this.state.email}</h4></div>
            <div className="card-header">
            <p>{this.state.password}</p></div>
            <div className="card-body">
            <p>{this.state.helpRequests}</p></div>
            <div className="card-body">
            <p>{this.state.helpOthersRequests}</p></div>
            
            </div></div></div></div></div>
            <div className="useritem">
        <Link style={{ textDecoration: 'none' }} to="/userindex/helpmeform/edit/:requestId">
          <button className="btngrey">
            <h2>Edit helpme form</h2>
          </button>
        </Link></div><div className="useritem">
        <Link style={{ textDecoration: 'none' }} to="/userindex/edit">
          <button className="btngrey">
            <h2>Edit profile</h2>
          </button>
        </Link>
        </div></div>
           
            
)
} 
  }

export default withAuth (Userprofile);