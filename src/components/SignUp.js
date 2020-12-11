import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { TextField, Button, Container } from "@material-ui/core";


class SignUp extends Component {
  state = {
    userName: "",
    password: "",
  };
  handleTextChange = (e) => {
    const state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  createAccount = (e) => {
    console.log("is create account running?");
    const userObject = {
      userName: this.state.userName,
      userPassword: this.state.password,
    };
    console.log(userObject + "this is the user object");
    e.preventDefault();
    this.props.setUser(userObject);
    if (this.props.user.userName !== "") {
    } else {
    }
  };
render() {
  if (this.state.redirectHome) {
      return <Redirect to="/" />;
    }
    return (
      <div className="app">
        <Container maxWidth="sm">
          <form className="login-form" onSubmit={this.login}>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.username}
              name="username"
              label="Username"
              type="text"
            />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.password}
              name="password"
              label="Password"
              type="password"
            />
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="grey"
            >
              Sign Up!
            </Button>
          </form>
        </Container>
      </div>
    );
  }
}  

export default SignUp;
  