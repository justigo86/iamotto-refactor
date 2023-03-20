import { ReactElement } from "react";
import "./App.scss";
import Nav from "./components/nav";

function App(): ReactElement {
  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
