import React, { useState } from "react";
import { Button, TextField, Container } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import { Redirect } from "react-router-dom";

const AddBusiness = (props) => {
  const [business, setBusiness] = useState({
    name: "",
    ingredients: "",
    description: "",
    redirect: false,
  });

  const handleTextChange = (e) => {
    const newBusiness = { ...business };
    newBusiness[e.target.id] = e.target.value;
    setBusiness(newBusiness);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...business };
    payload.id = uuidv4();
    props.addBusiness(payload);
    setBusiness({
      redirect: true,
    });
  };

  return (
    <Container maxWidth="sm" className="add-form">
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={handleTextChange}
          placeholder={"Name"}
          fullWidth={true}
          id="name"
          style={{backgroundColor: "rgba(255, 255, 255, 0.6)"}}
        />
        <TextField
          onChange={handleTextChange}
          placeholder={"ingredients"}
          fullWidth={true}
          id="ingredients"
          style={{backgroundColor: "rgba(255, 255, 255, 0.6)"}}
        />
        <TextField
          onChange={handleTextChange}
          placeholder={"Description"}
          fullWidth={true}
          id="description"
          style={{backgroundColor: "rgba(255, 255, 255, 0.6)"}}
        />
        <Button
          variant="contained"
          color="green"
          type="submit"
          size="small"
          style={{
            paddingLeft: 150,
            paddingRight: 150,
            marginTop: 25,
            marginBottom: 30,
            marginLeft: 100,
          }}
          onClick={handleSubmit}
        >
          Save
        </Button>
        {business.redirect && <Redirect to="/home" />}
      </form>
    </Container>
  );
};

export default AddBusiness;
