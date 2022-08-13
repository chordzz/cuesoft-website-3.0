import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders navigation bar", () => {
  render(<App />);
  const navigationBar = screen.getByTestId("navigation-bar");
  expect(navigationBar).toBeInTheDocument();
});

test("renders footer", () => {
  render(<App />);
  const footer = screen.getByTestId("footer");
  expect(footer).toBeInTheDocument();
});

test("renders homepage", () => {
  render(<App />);
  const homepage = screen.getByTestId("homepage");
  expect(homepage).toBeInTheDocument();
});
