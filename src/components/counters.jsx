import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    if (this.state.counters.length > 1) {
      const counters = this.state.counters.filter((c) => c.id !== counterId);
      this.setState({ counters });
    }
  };

  componentDidCatch = (error, errorInfo) => {
    console.log(error, errorInfo);
  };
  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-sm btn-primary m-2"
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            onDelete={this.handleDelete}
            value={counter.value}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
