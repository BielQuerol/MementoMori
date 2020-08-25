import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import "./Navbar.css";
import Logo from "../images/memento2.jpg";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <img className ="logo" src={Logo} alt="Logo"/>
        <Link className="btnavbar" style={{ textDecoration: "none" }} to="/login">
         <h2>Login</h2>
          </Link>
        <br />
        <Link className="btnavbar" style={{ textDecoration: "none" }} to="/signup">
         <h2>Signup</h2>
          </Link>
      </nav>
    );
  }
}

export default withAuth(Navbar);
