import React, { Component } from "react";

export class Counter extends Component {
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


export class LifecycleComponent extends Component {
  constructor(props) {
    super(props);
    console.log("my uuid: ", props.uuid)
  }

  componentDidMount() {
    // subscribe to data with uuid
    subscribe(this.props.uuid);
  }

  componentDidUpdate(prevProps) {
    if(this.props.uuid !== prevProps.uuid) {
      // change subscription for uuid change
      unsubscribe(prevProps.uuid);
      subscribe(this.props.uuid);
    }
  }

  componentWillUnmount() {
    // component will be removed from the tree
    unsubscribe(this.props.uuid);
  }

  render() {
    return <div>{this.props.uuid}</div>;
  }
}
