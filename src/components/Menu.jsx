import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
const Menu = () => (
  <Navbar color="light" light expand="md">
    <Nav className="mr-auto" navbar>
      <NavItem>
        <NavLink tag={Link} to="/sign-up">
          Sign Up
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} to="/login">
          Login
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} to="/search">
          Search
        </NavLink>
      </NavItem>
    </Nav>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink href="#">Cart 3</NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

export default Menu;
