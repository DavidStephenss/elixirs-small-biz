import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { TextField, Button, Container } from "@material-ui/core";
class App extends Component {
  state = {
    username: "",
    password: "",
    redirectHome: false,
  };

  handleTextChange = (e) => {
    const state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  login = (e) => {
    e.preventDefault();
    document.cookie = "loggedIn=true;max-age=60*1000";
    this.props.setUser(this.state.username);
    this.setState({ redirectHome: true });
  };

  render() {
    if (this.state.redirectHome) {
      return <Redirect to="/" />;
    }
    return (
      <div className="app">
        <Container maxWidth="sm">
          <form className="login-form" style={{ color: "white "}} onSubmit={this.login}>
            <TextField
              required
              style={{ color: "white "}}
              onChange={this.handleTextChange}
              value={this.state.username}
              name="username"
              label="Username"
              type="text"
              variant="outlined"
            />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.password}
              name="password"
              label="Password"
              type="password"
              style={{ color: "white "}}
            />
            <Button
              type="submit"
              className="login-button"
              variant="contained"
            >
              Login
            </Button>
            <br/>
            <Button
              type="submit"
              className="signUp-button"
              variant="contained"
            >
              <Link to="/sign-up">
                Signup!
              </Link>
            </Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default App;