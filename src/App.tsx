import React, { ReactElement } from "react";
import "./App.scss";
import Nav from "./components/nav/nav";
import Hero from "./components/hero/hero";

function App(): ReactElement {
  return (
    <div className="App">
      <Nav />
      <Hero />
    </div>
  );
}

export default App;
