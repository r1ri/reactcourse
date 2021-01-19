import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {

  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-secondary btn-danger"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}
