import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

class UserIndex extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>User index</h2>
        <Link to="/helpotherslist">
          <button classname="btngrey">
            <h2>Help Requests</h2>
          </button>
        </Link>
        <Link to="/helpmeform">
          <button classname="btngrey">
            <h2>Help me</h2>
          </button>
        </Link>
        <Link to="/edituser">
          <button classname="btngrey">
            <h2>Edit profile</h2>
          </button>
        </Link>
        <Link to="/logout">
          <button classname="btngrey">
            <h2>Log out</h2>
          </button>
        </Link>
      </div>
    );
  }
}

export default withAuth (UserIndex);
