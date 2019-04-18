import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="App">
      <h1 id="title">Hello, {name}</h1>
      <h2 id="subtitle">React Name Checker</h2>
      <form>
        <label htmlFor="name">Please enter your name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={event => {
            setName(event.target.value);
          }}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
