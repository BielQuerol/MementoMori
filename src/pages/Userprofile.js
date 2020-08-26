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
        <div className="container">
          <div className="heading">
            <div className="row">
              <div className="card">
                <div className="card-header">
                  <div className="card-body">
                    <img src={this.state.userImage} alt="profilepic"></img>
                  </div>
                  <div className="card-header">
                    <h4>{this.state.email}</h4>
                  </div>

                  <div className="card-body">
                    {this.state.helpMeRequests.reverse().map((el) => {
                      return (
                        <div>
                          <p>{el.title}</p>
                          <p>{el.description}</p>
                         <Link to={`/userindex/helpmeform/edit/${el._id}`}><button className="btngrey">Edit</button></Link>  
                        </div>
                      );
                    })}
                  </div>
                  <div className="card-body">
                    {this.state.helpOthersRequests.map((el) => {
                      return <p>{el.title}</p>;
                    })}{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
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
