import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decreaseCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <p>Class Counter: {this.state.count}</p>
        <button onClick={this.increaseCount}>Increase</button>
        <button onClick={this.decreaseCount}>Decrease</button>
      </div>
    );
  }
}

export default Counter;
