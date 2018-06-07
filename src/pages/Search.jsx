import React, { Component } from "react";
import SearchFilter from "../components/Search/Filter";
import SearchList from "../components/Search/List";
import data from "../resource/items.json";
export default class SearchPage extends Component {
  render() {
    return (
      <React.Fragment>
        <SearchFilter />
        <hr />
        <SearchList items={data.items} />
      </React.Fragment>
    );
  }
}
