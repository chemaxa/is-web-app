import React from "react";
import SearchItem from "./Item";
import data from "../../items.json";
const SearchList = () => {
  return data.items.map(item => <SearchItem item={item} key={item.id} />);
};

export default SearchList;
