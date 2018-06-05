import React, { Component } from "react";
import SearchFilter from "../components/Search/Filter";
import SearchList from "../components/Search/List";

export default class SearchPage extends Component {
  render() {
    return (
      <React.Fragment>
        <SearchFilter />
        <hr/>
        <SearchList />
      </React.Fragment>
    );
  }
}
