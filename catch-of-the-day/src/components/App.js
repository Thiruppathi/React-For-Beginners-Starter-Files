import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Header from "./Header";
import Inventory from "./Inventory";
import Fish from "./Fish";
import Order from "./Order";
import fishes from "../sample-fishes.js";
import base from "../base";

class App extends Component {
  state = {
    fishes: {},
    order: {}
  };

  static propTypes = {
    match: PropTypes.object
  };

  componentDidMount() {
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

  //Clean up any memory leak.
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = fish => {
    console.log("Adding a fish 🐠");
    // 1. Create a copy of existing state
    const fishes = { ...this.state.fishes };
    // 2. Copy new fish to fishes variable
    fishes[`fish${Date.now()}`] = fish;
    //3. Use setState API to update the state
    this.setState({ fishes });
  };

  updateFish = (key, updatedFish) => {
    // 1. Create a copy of current state
    const fishes = { ...this.state.fishes };
    // 2. Copy updatedFish to fishes
    fishes[key] = updatedFish;
    //3. Use setState API to update the state
    this.setState({ fishes });
  };

  deleteFish = key => {
    //1. Create a copy of existing state
    const fishes = { ...this.state.fishes };
    // 2. Set the Fish to delete
    fishes[key] = null;
    //3. Use setState API to update the state
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes });
  };

  addToOrder = key => {
    // 1. Take a copy of state
    const order = { ...this.state.order };
    // 2. Add to order or Update Order
    order[key] = order[key] + 1 || 1;
    // 3, Use setState API to update the state.
    this.setState({ order });
  };

  removeFromOrder = key => {
    // 1. Take a copy of state
    const order = { ...this.state.order };
    // 2. Add to order or Update Order
    delete order[key];
    // 3, Use setState API to update the state.
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key} // React's Identifier
                index={key} // Value to be passed to the order.
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
          storeId={this.props.match.params.storeId}
        />
      </div>
    );
  }
}

export default App;
