import React, { Component } from "react";

class Counter extends Component {
  //binding this with a method
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //     console.log("Counter was created", this);
  //   }
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
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

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";

    classes += this.state.count <= 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    let { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}
export default Counter;
