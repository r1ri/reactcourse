import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    const { counter, onIncrement, onDelete, onDecrement } = this.props;

    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClass()}>
            {counter.value === 0 ? "Zero" : counter.value}
          </span>
        </div>
        <div className="col">
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => onDecrement(counter)}
            className={this.getDecrementBadgeClass()}
          >
            -
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(counter.id)}
          >
            x
          </button>
        </div>
      </div>
    );
  }

  getDecrementBadgeClass() {
    return (
      "btn btn-secondary btn-sm m-2 " +
      (this.props.counter.value === 0 ? "disabled" : "active")
    );
  }

  getBadgeClass() {
    return (
      "badge m-2 badge-" + (this.props.counter.value === 0 ? "warning" : "primary")
    );
  }
}
