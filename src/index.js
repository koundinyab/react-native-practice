import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");

// class App extends React.Component {
//   render() {
//     console.log(this.props.count);
//     return (
//       <div className="App">
//         <h1>Hello</h1>
//         <h2>{this.props.count}</h2>
//       </div>
//     );
//   }
// }

let count = 5;

ReactDOM.render(
  <React.StrictMode>
    <App count={count} />
  </React.StrictMode>,
  rootElement
);
