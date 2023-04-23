import React, { ReactElement } from "react";
import "./App.scss";
import Nav from "./components/nav/nav";
import Hero from "./components/hero/hero";
import { Routes, Route } from "react-router-dom";

function App(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Hero />} />
      </Route>
    </Routes>
  );
}

export default App;
