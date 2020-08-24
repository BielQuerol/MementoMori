import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider"
import "./Signup.css";

class Signup extends Component {
  state = { email: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    //console.log('Signup -> form submit', { email, password });
  this.props.signup({ email, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
      

        <form className="box" onSubmit={this.handleFormSubmit}>
        <h1>Sign Up</h1>
        
          <input type="text" name="email" placeholder="youremail@whatever.com" value={email} onChange={this.handleChange} />

        
          <input type="password" name="password" placeholder="your password" value={password} onChange={this.handleChange} />

          <input type="submit" value="Signup" />
        
        
        <p>Already have an account?</p>
        <Link style={{ textDecoration: 'none' }} to={"/login"}> Login</Link>
        </form>
      </div>
    );
  }
}

export default  withAuth(Signup);
