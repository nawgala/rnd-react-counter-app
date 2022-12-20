import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    if (this.state.counters.length > 1) {
      const counters = this.state.counters.filter((c) => c.id !== counterId);
      console.log(counters);
      this.setState({ counters });
    }
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            id={counter.id}
            key={counter.value}
            onDelete={this.handleDelete}
            value={counter.value}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
