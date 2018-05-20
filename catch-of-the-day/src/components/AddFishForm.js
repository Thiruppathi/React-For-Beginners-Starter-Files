import React, { Component } from "react";

class AddFishForm extends Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = event => {
    event.preventDefault(); // Prevent Form Submission
    const fish = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value
    };
    this.props.addFish(fish);
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input type="text" name="name" placeholder="Name" ref={this.nameRef} />
        <input
          type="text"
          name="price"
          placeholder="Price"
          ref={this.priceRef}
        />
        <select name="status" placeholder="Status" ref={this.statusRef}>
          <option value="Available">Fresh!</option>
          <option value="Available">Sold Out!</option>
        </select>
        <textarea
          type="text"
          name="desc"
          placeholder="Desc"
          ref={this.descRef}
        />
        <input
          type="text"
          name="image"
          placeholder="Image"
          ref={this.imageRef}
        />
        <button type="submit"> + Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
