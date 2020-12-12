import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { TextField, Button, Container } from "@material-ui/core";


class SignUp extends Component {
  state = {
    userName: "",
    userPassword: "",
    redirectHome: false,
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
      userPassword: this.state.userPassword,
    };
    console.log(userObject + "user object");
    e.preventDefault();
    this.props.setUser(userObject);
    if (this.props.user.userName !== "") {
    } else {
    }
  };
render() {
  if (this.state.redirectHome) {
      return <Redirect to="/home" />;
    }
    return (
      <div className="app">
        <Container maxWidth="sm">
          <form className="login-form" onSubmit={this.createAccount}>
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="text"
            id="userName"
            label="Username"
            name="userName"
            onChange={this.handleTextChange}
            value={this.state.userName}
            autoComplete="userName"
            autoFocus
            style={{backgroundColor: "rgba(255, 255, 255, 0.6)"}}
            />
            <TextField
                required
                onChange={this.handleTextChange}
                value={this.state.userPassword}
                type="password"
                className="form-control"
                name="userPassword"
                label="Password"
                style={{backgroundColor: "rgba(255, 255, 255, 0.6)"}}
              />
            {/* <TextField
            variant="outlined"
            margin="normal"
            required
            onChange={this.handleTextChange}
            value={this.state.userPassword}
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            style={{backgroundColor: "rgba(255, 255, 255, 0.6)"}}
            /> */}
            <Button
              // type="submit"
              className="signUp-button"
              variant="contained"
              color="grey"
            >
              Sign Up!
            </Button>
            <Link to="/login" style={{color:"white", paddingTop: "20px"}}>
                Back to login!
            </Link>
          </form>
        </Container>
      </div>
    );
  }
}  

export default SignUp;
  