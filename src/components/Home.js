import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import cookie from "cookie";


const Home = (props) => {
  const cookies = cookie.parse(document.cookie);

  const deleteButton = (id) => {
    if (cookies.loggedIn) {
      return (
        <TableCell>
          <DeleteIcon
            onClick={() => props.removeBusiness(id)}
            style={{ color: "red" }}
          />
        </TableCell>
      );
    }
  };

  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="table-cell" style={{ color: "white "}}>Name</TableCell>
             <TableCell style={{ color: "white ", opacity:"1"}}>ingredients</TableCell>
            <TableCell style={{ color: "white ", opacity:"1"}}>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.businesses.map((business, id) => (
            <TableRow>
              <TableCell style={{ color: "green" }}>
                <Link to={`/business/${business.id}`}>{business.name}</Link>
              </TableCell>
              <TableCell style={{ color: "white ", opacity:"1"}}>{business.ingredients}</TableCell>
              <TableCell style={{ color: "white ", opacity:"1"}}>{business.description}</TableCell>
              {deleteButton(id)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Home;

// import CocktailCard from "./Card";

 // <div>
    //   <CocktailCard/>
    // </div>