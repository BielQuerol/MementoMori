import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import "./login.css";
class Login extends Component {
  state = { email: "", password: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    //console.log('Login -> form submit', { username, password });
    this.props.login({ email, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        

        <form className="box" onSubmit={this.handleFormSubmit}>
        <h1>Login</h1>
          <input
            type="text"
            name="email"
            placeholder="youremail@whatever.com"
            value={email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="your password"
            value={password}
            onChange={this.handleChange}
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default withAuth(Login);
