import React from "react";
import SearchItem from "./Item";
const SearchList = ({ items, ...rest }) => {
  return items.map(item => <SearchItem item={item} key={item.id} {...rest} />);
};

export default SearchList;
