import React, { Component } from "react";
import Navbar from "../components/Navbar";
import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="startbox">
          <div className="secondbox">
            <h1>Memento Mori</h1>
            <div className="itembox">
              <h4> Welcome to Memento Mori. The webpage to help each other.</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
