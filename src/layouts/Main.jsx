import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Navbar, Nav, NavItem, NavLink } from "reactstrap";
const MainLayout = ({ children }) => {
  return (
    <Container>
      <Row>
        <Col>
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
          </Navbar>
        </Col>
      </Row>
      <Row>
        <Col>{children}</Col>
      </Row>
    </Container>
  );
};
export default MainLayout;
