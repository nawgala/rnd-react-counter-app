import React, { Component } from "react";

class Counter extends Component {
  //binding this with a method
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //     console.log("Counter was created", this);
  //   }
  state = {
    value: this.props.value,
  };

  render() {
    console.log("props:", this.props);
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => {
            this.handleIncrement({ id: 1 });
          }}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm"
        >
          Decrement
        </button>
      </div>
    );
  }

  handleIncrement = (product) => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = () => {
    if (this.state.value > 0) {
      this.setState({ value: this.state.value - 1 });
    }
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";

    classes += this.state.value <= 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    let { value } = this.state;
    return value === 0 ? "zero" : value;
  }
}
export default Counter;
