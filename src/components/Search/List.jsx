import React from "react";
import SearchItem from "./Item";
const SearchList = ({ items }) => {
  return items.map(item => <SearchItem item={item} key={item.id} />);
};

export default SearchList;
