import React from "react";
import { Media, Button, Row, Col } from "reactstrap";
import "./search.css";
const SearchItem = ({ item }) => {
  return (
    <Media className="search__item rounded">
      <Media left href="#">
        <Media
          object
          src="https://placekitten.com/128/128"
          alt="Generic placeholder image"
        />
      </Media>
      <Media body>
        <Media heading>{item.name}</Media>
        <Row>
          <Col>Name: {item.name}</Col>
          <Col>Issue date: {item.issue_date}</Col>
          <Col>Price: {item.price}</Col>
        </Row>
        <Row>
          <Col>Color: {item.color}</Col>
          <Col>In stock: {item.instock}</Col>
          <Col>
            <Button>Order</Button>
          </Col>
        </Row>
      </Media>
    </Media>
  );
};
export default SearchItem;
