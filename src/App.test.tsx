import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders navigation bar", () => {
  render(<App />);
  const navigationBar = screen.getByTestId("navigation-bar");
  expect(navigationBar).toBeInTheDocument();
});
