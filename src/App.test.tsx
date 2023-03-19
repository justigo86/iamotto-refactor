import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

describe("render the App", () => {
  test("renders", () => {
    const { container } = render(<App />);
    const element = container.querySelector(".App");
    expect(element).toBeInTheDocument();
  });
});
