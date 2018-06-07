import React from "react";
import { Media, Button, Row, Col } from "reactstrap";
import "./search.css";
const SearchItem = ({ item, addToCart, removeFromCart }) => {
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
          <Col>
            <h4>Price: {item.price}</h4>
          </Col>
        </Row>
        <Row>
          <Col>Color: {item.color}</Col>
          <Col>In stock: {item.instock}</Col>
          <Col>
            {addToCart && (
              <Button color="primary" onClick={addToCart.bind(null, item)}>
                Buy
              </Button>
            )}{" "}
            {removeFromCart && (
              <Button color="danger" onClick={removeFromCart.bind(null, item)}>
                Remove
              </Button>
            )}
          </Col>
        </Row>
      </Media>
    </Media>
  );
};
export default SearchItem;
