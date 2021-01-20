import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {
    render() {
    const { onReset, counters, onDelete, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-secondary btn-danger">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}
