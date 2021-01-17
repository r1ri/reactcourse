import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="my-2">
        <span className={this.getBadgeClass()}>
          {this.state.count === 0 ? "Zero" : this.state.count}
        </span>
        <button onClick={this.handleIncrement} className="btn btn-secondary">
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={this.props.onDelete}
        >
          delete
        </button>
      </div>
    );
  }

  getBadgeClass() {
    return (
      "badge m-2 badge-" + (this.state.count === 0 ? "warning" : "primary")
    );
  }
}
