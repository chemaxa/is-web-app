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
                <NavLink tag={Link} to="/public">
                  Sign Up
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/protected">
                  Login
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
