import React from "react";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const Business = (props) => {
  const id = props.match.params.id;
  const business = props.businesses.find((business) => business.id === id);
  console.log(id);
  return (
    <Container style={{ height: "50vh", width: "45vw" }}>
      <Typography className="biz-paper">
        <h2>{business["name"]}</h2>
        <h5>ingredients:</h5> <p> {business["ingredients"]} </p>
        <h5>Description:</h5> <p> "{business["description"]}"</p>
      </Typography>
    </Container>
  );
};

export default Business;