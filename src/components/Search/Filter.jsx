import React from "react";
import DatePicker from "react-datepicker";
import {
  CustomInput,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Button
} from "reactstrap";

const SearchFilter = ({ values, handlers }) => {
  return (
    <Form className="mt-3">
      <Row>
        <Col md="4">
          <FormGroup>
            <Label>From</Label>
            <DatePicker
              className="form-control"
              selectsStart
              selected={values.startDate}
              startDate={values.startDate}
              endDate={values.endDate}
              onChange={handlers.handleChangeStartDate}
            />
          </FormGroup>
        </Col>
        <Col md="4">
          <FormGroup>
            <Label>To</Label>
            <DatePicker
              className="form-control"
              selectsEnd
              selected={values.endDate}
              startDate={values.startDate}
              endDate={values.endDate}
              onChange={handlers.handleChangeEndDate}
            />
          </FormGroup>
        </Col>
        <Col md="4">
          <FormGroup>
            <Label for="inStock">In Stock only</Label>
            <CustomInput
              type="checkbox"
              id="inStock"
              name="inStock"
              checked={values.inStock}
              onChange={handlers.handleChange}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md="4">
          <FormGroup>
            <Label for="price-from">Price from</Label>
            <Input
              type="number"
              name="priceFrom"
              value={values.priceFrom}
              id="price-from"
              pattern="[0-9]+([\.,][0-9]{2})?"
              step="0.01"
              placeholder="Price from"
              onChange={handlers.handleChange}
            />
          </FormGroup>
        </Col>
        <Col md="4">
          <FormGroup>
            <Label for="price-to">Price to</Label>
            <Input
              type="number"
              name="priceTo"
              value={values.priceTo}
              pattern="[0-9]+([\.,][0-9]{2})?"
              step="0.01"
              id="price-to"
              placeholder="Price to"
              onChange={handlers.handleChange}
            />
          </FormGroup>
        </Col>
        <Col md="4">
          <FormGroup>
            <Label for="color">Color</Label>
            <Input
              type="select"
              name="color"
              id="color"
              value={values.color}
              onChange={handlers.handleChange}
            >
              <option value="">Please choose color</option>
              <option value="red">Red</option>
              <option value="white">White</option>
              <option value="black">Black</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md="1">
          <Button onClick={handlers.clearFilter}>Clear</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchFilter;
