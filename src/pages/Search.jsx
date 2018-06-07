import React, { Component } from "react";
import SearchFilter from "../components/Search/Filter";
import SearchList from "../components/Search/List";
import Cart from "../components/Cart";
import data from "../resource/items.json";
import moment from "moment";
import { withRouter } from "react-router-dom";
class SearchPage extends Component {
  constructor() {
    super();
    const moments = data.items.map(i => moment(i.issue_date, "MM/DD/YY"));
    const prices = data.items.map(i => i.price);
    this.state = {
      items: data.items,
      cartItems: [],
      isOpenModal: false,
      filters: {
        startDate: moment.min(moments),
        endDate: moment.max(moments),
        priceFrom: Math.min.apply(null, prices),
        priceTo: Math.max.apply(null, prices),
        color: "",
        inStock: false
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    const { isOpenModal } = nextProps.location.state;
    this.setState({
      isOpenModal
    });
  }

  addToCart = item => {
    const { cartItems } = this.state;
    cartItems.push(item);
    this.setState({
      cartItems
    });
  };

  removeFromCart = item => {
    const { cartItems } = this.state;
    this.setState({
      cartItems: cartItems.filter(i => i.id !== item.id)
    });
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.filterItems({
      [name]: value
    });
  };

  handleChangeStartDate = date => {
    this.filterItems({
      startDate: date
    });
  };

  handleChangeEndDate = date => {
    this.filterItems({
      endDate: date
    });
  };

  filterItems = filterParams => {
    const filters = {
      ...this.state.filters,
      ...filterParams
    };
    const newItems = data.items
      .filter(i => {
        return (
          (filters.priceFrom < i.price && i.price < filters.priceTo) ||
          (!filters.priceFrom && !filters.priceTo)
        );
      })
      .filter(i => {
        return (filters.inStock && i.instock > 0) || !filters.inStock;
      })
      .filter(i => {
        return (
          (filters.color &&
            filters.color.toLowerCase() === i.color.toLowerCase()) ||
          !filters.color
        );
      })
      .filter(i => {
        return moment(i.issue_date, "MM/DD/YY").isBetween(
          filters.startDate,
          filters.endDate
        );
      });

    this.setState({
      items: newItems,
      filters
    });
  };

  clearFilter = () => {
    const { cartItems } = this.state;
    this.setState({
      items: data.items,
      cartItems,
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

  toggle = () => {
    const { isOpenModal } = this.state;
    const { history, location } = this.props;
    this.setState({
      isOpenModal: !isOpenModal
    });
    history.push({
      pathname: location.pathname,
      state: {
        isOpenModal: !isOpenModal
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
        <SearchList
          items={this.state.items}
          addToCart={this.addToCart}
          removeFromCart={this.removeFromCart}
        />
        <Cart
          items={this.state.cartItems}
          isOpen={this.state.isOpenModal}
          toggle={this.toggle}
          addToCart={this.addToCart}
          removeFromCart={this.removeFromCart}
        />
      </React.Fragment>
    );
  }
}

export default withRouter(SearchPage);
