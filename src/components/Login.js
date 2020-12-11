import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { TextField, Button, Container } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

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
      return <Redirect to="/home" />;
    }
    return (
      <div className="app">
        <CssBaseline />
        <Container maxWidth="sm">
          <form className="login-form" style={{ color: "white "}} onSubmit={this.login}>
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="text"
            id="userName"
            label="Username"
            name="userName"
            // onChange={handleUsernameChange}
            autoComplete="userName"
            autoFocus
            style={{backgroundColor: "rgba(255, 255, 255, 0.6)"}}
            />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            // onChange={handlePasswordChange}
            autoComplete="current-password"
            style={{backgroundColor: "rgba(255, 255, 255, 0.6)"}}
            />
            <Button
              type="submit"
              className="login-button"
              variant="contained">
                Login 
            </Button>
            <br/>
              <Link to="/sign-up" style={{color:"white"}}>
                Don't have an account? Signup!
              </Link>
          </form>
        </Container>
      </div>
    );
  }
}

export default App;