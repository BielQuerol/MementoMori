import React, { Component } from "react";
import Navbar from "../components/Navbar";
import "./HomePage.css";
import Logo from "../images/memento2.jpg";
class HomePage extends Component {
  render() {
    return (
      <div>
      
        <div className="startbox">
          <div className="itembox">
            <img src={Logo}></img></div>
            <div className="itembox">
              <h4> Welcome to Memento Mori. The webpage to help each other.</h4>
            </div>
          </div>
        </div>
      
    );
  }
}

export default HomePage;
