import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import cookie from "cookie";

export default function Navigation(props) {
  const cookies = cookie.parse(document.cookie);

  return (
    <div>
      <AppBar position="relative">
        <Toolbar className="nav-bar">
          <h1 variant="h1" className="nav-title" class="animate__animated animate__bounce" style={{fontSize:"large"}}>
             Welcome To Elixirs!
          </h1>
          <ul className="nav-list">
            <Button color="inherit" className="nav-list-item">
              <Link to="/home">Cocktails</Link>
            </Button>
             <Button color="inherit" className="nav-list-item">
              <Link to="/about">Info</Link>
            </Button>
            <li>
              {document.cookie === "loggedIn=true" && (
                <div>
                  <Button color="inherit" className="nav-list-item">
                    <Link to="/add">Add</Link>
                  </Button>
                  <Button
                    color="inherit"
                    className="nav-list-item"
                    onClick={() => {
                      document.cookie = "loggedIn=";
                      window.location.replace("/");
                    }}
                  >
                    Logout
                  </Button>
                </div>
              )}
            </li>
            <li color="inherit">
              {document.cookie !== "loggedIn=true" && (
                <Button
                  color="inherit"
                  onClick={() => {
                    document.cookie = "loggedIn=";
                    window.location.replace("/");
                  }}
                >
                  Login
                </Button>
              )}
            </li>
          </ul>
        </Toolbar>
      </AppBar>
      <Typography color="text-primary">
        {cookies.loggedIn && (
          <span  style={{ color: "white", paddingLeft: "20px" }}>
            Welcome <span style={{ color: "White" }}>{props.user}</span>!
          </span>
        )}
      </Typography>
    </div>
  );
}
