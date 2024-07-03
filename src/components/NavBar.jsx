import React from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import './styles.css';

export const NavBar = () => {
  return (
    <Navbar expand="md" className="m-0 p-0 backgroud-navBar">
      <Container fluid >
        <Navbar.Brand href="#">
          <img
            src="/images/logoSebas.jpg"
            width="70"
            height="auto"
            className="d-inline-block align-top rounded"
            alt="Logo Valve"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
            as="ul"
          >
            
            <Nav.Item as="li">
              <Nav.Link as={NavLink} to="/" >
              Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link as={NavLink} to="/review" >
              Review
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item as="li">
              <Nav.Link as={NavLink} to="/review" >
                Review
              </Nav.Link>
            </Nav.Item> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="warning" >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
