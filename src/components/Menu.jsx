import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import Auth from "../services/Auth";
const Menu = ({ history, location }) => {
  const signOut = () => {
    Auth.signOut();
    history.push(process.env.PUBLIC_URL + "/");
  };

  return (
    <Navbar color="light" light expand="md">
      <Nav className="mr-auto" navbar>
        {!Auth.isAuthenticated() && (
          <NavItem>
            <NavLink tag={Link} to={process.env.PUBLIC_URL + "/sign-up"}>
              Sign Up
            </NavLink>
          </NavItem>
        )}
        <NavItem>
          <NavLink
            tag={Link}
            to={
              Auth.isAuthenticated() ? "#" : `${process.env.PUBLIC_URL}/login`
            }
          >
            {Auth.getUser() || "Login"}
          </NavLink>
        </NavItem>
      </Nav>
      {Auth.isAuthenticated() && (
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="#" onClick={signOut}>
              Sign Out
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              onClick={() => {
                history.push({
                  pathname: location.pathname,
                  state: {
                    isOpenModal: true
                  }
                });
              }}
            >
              Cart
            </NavLink>
          </NavItem>
        </Nav>
      )}
    </Navbar>
  );
};

export default withRouter(Menu);
