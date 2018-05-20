import React, { Component } from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Fish from "./Fish";
import Order from "./Order";
import fishes from "../sample-fishes.js";

class App extends Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    console.log("Adding a fish 🐠");
    // 1. Create a copy of existing state
    const fishes = { ...this.state.fishes };
    // 2. Copy new fish to fishes variable
    fishes[`fish${Date.now()}`] = fish;
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
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
