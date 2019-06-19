import React, { Component } from "react";

const Row = props => {
  return (
    <tr>
      <td>{props.data.name}</td>
      <td>{props.data.salary}</td>
    </tr>
  );
};

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>Name:</td>
            <td>Daily salary:</td>
          </tr>
        </thead>
        <tbody />
      </table>
    );
  }
}

class Controls extends Component {
  render() {
    return (
      <div className="controls">
        <button>clear table</button>
        <button>add record</button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Mobx Table</h1>
        <Controls />
        <Table />
      </div>
    );
  }
}

export default App;
