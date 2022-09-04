import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { WinstonProvider } from "winston-react";
import App from "./App";
import logger from "./libs/logger";

test("renders navigation bar", () => {
  render(
    <WinstonProvider logger={logger}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </WinstonProvider>
  );
  const navigationBar = screen.getByTestId("navigation-bar");
  expect(navigationBar).toBeInTheDocument();
});

test("renders footer", () => {
  render(
    <WinstonProvider logger={logger}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </WinstonProvider>
  );
  const footer = screen.getByTestId("footer");
  expect(footer).toBeInTheDocument();
});

test("renders homepage", () => {
  render(
    <WinstonProvider logger={logger}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </WinstonProvider>
  );
  const homepage = screen.getByTestId("homepage");
  expect(homepage).toBeInTheDocument();
});
