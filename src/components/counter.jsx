import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    return (
      <div className="my-2">
        <span className={this.getBadgeClass()}>
          {this.props.counter.value === 0 ? "Zero" : this.props.counter.value}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          delete
        </button>
      </div>
    );
  }

  getBadgeClass() {
    return (
      "badge m-2 badge-" +
      (this.props.counter.value === 0 ? "warning" : "primary")
    );
  }
}
