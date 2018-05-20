import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  storeNameTextBox = React.createRef();

  goToStore = event => {
    event.preventDefault(); // Stop Form Submission
    let storeName = this.storeNameTextBox.value.value; // Get the value from text box
    this.props.history.push(`/store/${storeName}`); // Go to the Store Page with Store Name.
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.storeNameTextBox}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
