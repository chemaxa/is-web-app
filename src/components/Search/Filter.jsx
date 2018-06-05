import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import {
  CustomInput,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Col,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

export default class SearchFilter extends Component {
  state = {
    startDate: moment()
  };
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  render() {
    return (
      <Form className="mt-3">
        <Row>
          <Col md="4">
            <FormGroup>
              <Label>From</Label>
              <DatePicker
                className="form-control"
                selected={this.state.startDate}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <Label>To</Label>
              <DatePicker
                className="form-control"
                selected={this.state.startDate}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <Label for="inStock">In Stock only</Label>
              <CustomInput type="checkbox" id="inStock" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <FormGroup>
              <Label for="price-from">Price from</Label>
              <Input
                type="number"
                name="number"
                id="price-from"
                pattern="[0-9]+([\.,][0-9]{2})?"
                step="0.01"
                placeholder="Price from"
              />
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <Label for="price-to">Price to</Label>
              <Input
                type="number"
                name="number"
                pattern="[0-9]+([\.,][0-9]{2})?"
                step="0.01"
                id="price-to"
                placeholder="Price to"
              />
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <Label for="color">Color</Label>
              <Input type="select" name="color" id="color">
                <option value="red">Red</option>
                <option value="white">White</option>
                <option value="black">Black</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    );
  }
}
