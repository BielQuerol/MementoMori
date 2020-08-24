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
            <h2>Memento Mori</h2>
            <div className="itembox">
              <p> Welcome to Memento Mori. The webpage to help each other.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
