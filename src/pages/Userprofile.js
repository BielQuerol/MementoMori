import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Userprofile.css";

class Userprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      userImage: "",
      helpMeRequests: [],
      helpOthersRequests: [],
    };
  }
  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API_URI}/api/user`, {
        withCredentials: true,
      })
      .then((theResponse) => {
        const {
          email,
          password,
          userImage,
          helpMeRequests,
          helpOthersRequests,
        } = theResponse.data;
        this.setState({
          email,
          password,
          userImage,
          helpMeRequests,
          helpOthersRequests,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        {" "}
        <div className="hello">
          <div className="profilepic">
            <img src={this.state.userImage} alt="profilepic"></img>
          </div>
          <div className="emailitem">
            <h4>{this.state.email}</h4>
          </div>
          {this.state.helpMeRequests.map((el) => {
            return (
              <div className="card">
                <div className="card-header">
                  <p>{el.title}</p>
                </div>
                <div className="card-body">
                  <p>{el.description}</p>
                </div>

                <div className="card-body">
                  <p>{el.message}</p>
                </div>
                <div className="card-body">
                  <p>{el.senderTel}</p>
                </div>
                <div className="card-body">
                  <p>{el.senderEmail}</p>
                </div>
                <div className="card-bottom">
                  <p>{el.city}</p>
                </div>
                <div className="card-body">
                  <p>{el.description}</p>
                </div>
              </div>
            );
          })}
          <div className="enlace">
            <Link
              style={{ textDecoration: "none" }}
              to={`/userindex/helpmeform/edit/:requestId`}
            >
              <button className="btngrey">
                <h2>Edit help form</h2>
              </button>
            </Link>
          </div>
          {this.state.helpOthersRequests.map((el) => {
            return (
              <div className="card">
                <div className="card-header">
                  <p>{el.title}</p>
                </div>
                <div className="card-body">
                  <p>{el.description}</p>
                </div>
                <div className="card-bottom">
                  <p>{el.city}</p>
                </div>
              </div>
            );
          })}{" "}
        </div>
        <div className="useritem">
          <Link style={{ textDecoration: "none" }} to="/userindex/edit">
            <button className="btngrey">
              <h2>Edit profile</h2>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default withAuth(Userprofile);
