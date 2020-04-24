import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  incrementCounter() {
    this.setState({
      count: this.state.count + 1
    });
    this.setState({
      count: this.state.count + 4
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <div>
          <button onClick={() => this.incrementCounter()}>Increment</button>
        </div>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}
