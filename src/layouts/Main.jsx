import React from "react";

import { Container, Row, Col } from "reactstrap";
import Menu from "../components/Menu";
const MainLayout = ({ children }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Menu />
        </Col>
      </Row>
      <Row>
        <Col>{children}</Col>
      </Row>
    </Container>
  );
};
export default MainLayout;
