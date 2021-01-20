import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters.jsx";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleReset = () => {
    let counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });
  };

  handleDecrement = (counter) => {
      if (counter.value !== 0){  
          let counters = [...this.state.counters];
          let index = counters.indexOf(counter);
          counters[index] = { ...counter };
          counters[index].value--;

          this.setState({ counters }); 
      }
  };

  handleDelete = (id) => {
    let counters = this.state.counters.filter((c) => c.id !== id);

    this.setState({ counters });
  };

  render() {  
    return (
      <React.Fragment>
        <Navbar totalCounters={this.state.counters.filter(c => c.value>0).length} />
      <main className="container">
      <Counters
        counters={this.state.counters}
        onDecrement={this.handleDecrement}
        onReset={this.handleReset}
        onIncrement={this.handleIncrement}
        onDelete={this.handleDelete}
      />
      </main>
      </React.Fragment>
    );
  }
}

export default App;
