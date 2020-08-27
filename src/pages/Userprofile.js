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
          
            <img className="profilepic" src={this.state.userImage} alt="profilepic"></img>
          
          <div className="emailitem">
            <h3>{this.state.email}</h3>
          </div>
          {this.state.helpMeRequests.map((el) => {
            return (
              <div key={el._id} className="card">
                <div className="card-header">
                  <h2>{el.title}</h2>
                </div>
                <div className="card-body">
                  <h4>{el.description}</h4>
                </div>

                {el.helpMessages.map((message) => {
                  return (
                    <div key={message._id}>
                      <div className="card-body">
                        <h4>Contact message:</h4><p>{message.message}</p>
                      </div>
                      <div className="card-body">
                        <h4>Phone contact number:</h4><p>{message.senderTel}</p>
                      </div>
                      <div className="card-body">
                       <h4>Contact email:</h4><p>{message.senderEmail}</p>
                      </div>
                      
                    </div>
                  );
                })}
                <div className="enlace">
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/userindex/helpmeform/edit/${el._id}`}
                  >
                    <button className="btngrey">
                      <h2>Edit help form</h2>
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
          {this.state.helpOthersRequests.map((el) => {
            return (
              <div key={el._id} className="card">
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
