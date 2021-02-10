import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

// import { ReactComponent } from "*.svg";

class App extends Component {
  state = {
    counters: [
      { id: 1, name: "c1", value: 8 },
      { id: 2, name: "c2", value: 0 },
      { id: 3, name: "c3", value: 0 },
      { id: 4, name: "c4", value: 0 },
      { id: 5, name: "c5", value: 0 },
    ],
  };

  constructor() {
    super();
    console.log("App");
  }

  componentDidMount() {
    console.log("App mounted");
  }

  handleDelete = (counterId) => {
    // console.log("event handler", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  // custom function for inc & dec
  // incDec = () => {};

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    // console.log(this.state.counters[1]);
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    // console.log(this.state.counters[1]);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    // console.log("app rendered");

    return (
      <React.Fragment>
        <NavBar total={this.state.counters.filter((c) => c.value > 0).length} />
        <Counters
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          counters={this.state.counters}
        />
      </React.Fragment>
    );
  }
}

export default App;
