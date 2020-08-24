import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import "./Userindex.css";

class UserIndex extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <div className="userbox">
        <h2>User index</h2>
       <div className="useritem">
        <Link style={{ textDecoration: 'none' }} to="/helpotherslist">
          <button className="btngrey">
            <h2>Help Requests</h2>
          </button>
        </Link>
        </div>
        <div className="useritem">
        <Link style={{ textDecoration: 'none' }} to="/userindex/helpmeform">
          <button className="btngrey">
            <h2>Help me</h2>
          </button>
        </Link>
        </div>
        <div className="useritem">
        <Link style={{ textDecoration: 'none' }} to="/userindex/edit">
          <button className="btngrey">
            <h2>Edit profile</h2>
          </button>
        </Link></div>
        <div className="useritem">
        <Link style={{ textDecoration: 'none' }} to="/logout">
          <button className="btngrey">
            <h2>Log out</h2>
          </button>
        </Link>
      </div></div></div>
    );
  }
}

export default withAuth (UserIndex);
