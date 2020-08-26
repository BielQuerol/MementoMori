import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import "./Navbar.css";
import Logo from "../images/memento2.jpg";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="btnavbar"><img className ="logo" src={Logo} alt="Logo"/></div>
        <div className="navbarlinks">
        <Link className="btnavbar" style={{ textDecoration: "none" }} to="/userindex">
         <h2>Index</h2>
          </Link>
        <Link className="btnavbar" style={{ textDecoration: "none" }} to="/login">
         <h2>Login</h2>
          </Link>
        <Link className="btnavbar" style={{ textDecoration: "none" }} to="/signup">
         <h2>Signup</h2>
          </Link></div>
      </nav>
    );
  }
}

export default withAuth(Navbar);
