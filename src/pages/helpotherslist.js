import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import "./helpotherslist.css";

class HelpOthersList extends Component {
  constructor() {
    super();
    this.state = { listOfHelpRequests: [] };
  }

  getAllHelpRequests = () => {
    axios
      .get(`http://localhost:4000/api/helprequest`, {withCredentials: true})
      .then((responseFromApi) => {
        this.setState({
          listOfHelpRequests: responseFromApi.data,
        });
      });
  };
  componentDidMount() {
    this.getAllHelpRequests();
  }

  render() {
    return (
      <div>
        <div>
          {this.state.listOfHelpRequests.map((helprequest) => {
            return (
              <div className="container">
                <div className="heading">
                  <div className="row">
                    <div className="card">
                      
                        <div key={helprequest._id}></div>
                          <Link style={{ textDecoration: "none" }} to={`/helpothersdetail/${helprequest._id}`}>
                      
                          <div className="card-header">
                          <h2>{helprequest.title}</h2></div>
                          </Link>
                        
                        <div className="card-body">
                          <p>{helprequest.description}</p>
                        </div>
                        <div className="card-bottom">
                          <p>{helprequest.city}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
            );
          })}
        </div>
      </div>
    );
  }
}

export default withAuth(HelpOthersList);
