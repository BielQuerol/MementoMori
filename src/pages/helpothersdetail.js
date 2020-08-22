import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

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
        <h2>{this.state.title}</h2>
        <p>{this.state.description}</p>
        <p>{this.state.city}</p>
        <Link to={"/helpotherslist"}>Back to help requests list</Link>
        <Link to={"/helpothersdetail/senderform"}>
          <button className="btngrey">I can help</button>
        </Link>
      </div>
    );
  }
}

export default withAuth(HelpOthersDetail);
