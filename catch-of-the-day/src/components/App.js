import React, { Component } from "react";
import Header from "./Header";
import Inventory from "./Inventory";
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

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
