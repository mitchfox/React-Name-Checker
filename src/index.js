import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello, ...</h1>
      <h2>React Name Checker</h2>
      <form
        onSubmit={event => {
          event.preventDefault();
          console.log(event.target.elements.name.value);
        }}
      >
        <label htmlFor="name">Please enter your name: </label>
        <input id="name" name="name" type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
