import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import SearchList from "./Search/List";

const Cart = ({ items, isOpen, toggle, ...rest }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Your cart</ModalHeader>
      <ModalBody>
      {items.length ? <SearchList items={items} removeFromCart={rest.removeFromCart} /> : "Cart is empty"}
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default Cart;
