import React, { Component } from "react";
import SearchFilter from "../components/Search/Filter";
import SearchList from "../components/Search/List";
import data from "../resource/items.json";
import moment from "moment";
export default class SearchPage extends Component {
  state = {
    filters: {
      startDate: moment(),
      endDate: moment(),
      priceFrom: "",
      priceTo: "",
      color: "",
      inStock: false
    }
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    const { filters } = this.state;
    this.setState({
      filters: {
        ...filters,
        [name]: value
      }
    });
  };

  handleChangeStartDate = date => {
    console.log(date.format());
    const { filters } = this.state;
    this.setState({
      filters: {
        ...filters,
        startDate: date
      }
    });
  };

  handleChangeEndDate = date => {
    console.log(date.format());
    const { filters } = this.state;
    this.setState({
      filters: {
        ...filters,
        endDate: date
      }
    });
  };

  clearFilter = () => {
    this.setState({
      filters: {
        startDate: moment(),
        endDate: moment(),
        priceFrom: "",
        priceTo: "",
        color: "",
        inStock: false
      }
    });
  };
  render() {
    return (
      <React.Fragment>
        <SearchFilter
          handlers={{
            handleChange: this.handleChange,
            handleChangeStartDate: this.handleChangeStartDate,
            handleChangeEndDate: this.handleChangeEndDate,
            clearFilter: this.clearFilter
          }}
          values={{ ...this.state.filters }}
        />
        <hr />
        <SearchList items={data.items} />
      </React.Fragment>
    );
  }
}
