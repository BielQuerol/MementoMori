import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
      
        <Link style={{ textDecoration: 'none'}} to="/login">
          <button className="btngrey btnavbar">Login</button>
        </Link>
        <br />
        <Link style={{ textDecoration: 'none' }} to="/signup">
          <button className="btngrey btnavbar">Sign Up</button>
        </Link>
        
      </nav>
    );
  }
}

export default withAuth(Navbar);
