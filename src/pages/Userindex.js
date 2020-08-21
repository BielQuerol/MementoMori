import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

class Userindex extends Component {
  constructor(props) {
    super(props)
  }
    
  render() {
    return (
      <div>
        <h2>User index</h2>
        <button><h2>Help Requests</h2>
          <a href="/helpotherslist"></a>
        </button>
        <button><h2>Help me</h2>
          <a href="/helpmeform"></a>
        </button>
        <button><h2>Edit profile</h2>
          <a href="/edit"></a>
        </button>
        <button><h2>Log out</h2>
          <a href="/logout"></a>
        </button>
      </div>
    );
  }
}

export default Userindex;
