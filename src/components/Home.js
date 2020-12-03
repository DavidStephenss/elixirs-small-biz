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
            <TableCell className="table-cell">Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Hour</TableCell>
            <TableCell>Address</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.businesses.map((business, id) => (
            <TableRow key={business.address}>
              <TableCell style={{ color: "mediumblue" }}>
                <Link to={`/business/${business.id}`}>{business.name}</Link>
              </TableCell>
              <TableCell>{business.description}</TableCell>
              <TableCell>{business.hours}</TableCell>
              <TableCell>{business.address}</TableCell>
              {deleteButton(id)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Home;
