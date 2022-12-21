import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { WinstonProvider } from "winston-react";
import App from "./App";
import logger from "./libs/logger";
import { LanguageDropdown } from "./components/language-dropdown/LanguageDropdown";
import NavigationBar from "./components/navigation-bar/NavigationBar";

window.scrollTo = jest.fn();
afterEach(cleanup);

describe("Renders Some Component and pages", () => {
  afterEach(() => {
    jest.resetAllMocks();
    // afterEach(cleanup);
  });
  afterAll(() => {
    jest.clearAllMocks();
    // afterEach(cleanup)
  });

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

  test("renders aboutpage when you click on the navbar about option", async () => {
    render(
      <WinstonProvider logger={logger}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </WinstonProvider>
    );

    const homepage = screen.getByTestId("homepage");
    const aboutNavLink = screen.getAllByTestId("aboutpage-nav-link");

    aboutNavLink.forEach((item) => {
      fireEvent.click(item);
      const aboutpage = screen.getByTestId("aboutpage");
      expect(aboutpage).toBeInTheDocument();
      expect(homepage).not.toBeInTheDocument();
    });
  });

  test("renders contactpage when you click on the navbar contact option", async () => {
    render(
      <WinstonProvider logger={logger}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </WinstonProvider>
    );

    const homepage = screen.getByTestId("homepage");
    const contactNavLink = screen.getAllByTestId("contactpage-nav-link");

    contactNavLink.forEach((item) => {
      fireEvent.click(item);
      const contactpage = screen.getByTestId("contactpage");
      expect(contactpage).toBeInTheDocument();
      expect(homepage).not.toBeInTheDocument();
    });
  });

  test("renders servicespage when you click on the navbar services option", async () => {
    render(
      <WinstonProvider logger={logger}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </WinstonProvider>
    );

    const homepage = screen.getByTestId("homepage");
    const servicesNavLink = screen.getAllByTestId("servicespage-nav-link");

    servicesNavLink.forEach((item) => {
      fireEvent.click(item);
      const services = screen.getByTestId("servicespage");
      expect(services).toBeInTheDocument();
      expect(homepage).not.toBeInTheDocument();
    });
  });

  test("renders careerspage when you click on the navbar careers option", async () => {
    render(
      <WinstonProvider logger={logger}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </WinstonProvider>
    );

    const homepage = screen.getByTestId("homepage");
    const careersNavLink = screen.getAllByTestId("careerspage-nav-link");

    careersNavLink.forEach((item) => {
      fireEvent.click(item);
      const careers = screen.getByTestId("careerspage");
      expect(careers).toBeInTheDocument();
      expect(homepage).not.toBeInTheDocument();
    });
  });

  test("renders investorspage when you click on the navbar investors option", async () => {
    render(
      <WinstonProvider logger={logger}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </WinstonProvider>
    );

    const homepage = screen.getByTestId("homepage");
    const investorsNavLink = screen.getAllByTestId("investorspage-nav-link");

    investorsNavLink.forEach((item) => {
      fireEvent.click(item);
      const investors = screen.getByTestId("investorspage");
      expect(investors).toBeInTheDocument();
      expect(homepage).not.toBeInTheDocument();
    });
  });

  test("renders partnerspage when you click on the navbar partners option", async () => {
    render(
      <WinstonProvider logger={logger}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </WinstonProvider>
    );

    const homepage = screen.getByTestId("homepage");
    const partnersNavLink = screen.getAllByTestId("partnerspage-nav-link");

    partnersNavLink.forEach((item) => {
      fireEvent.click(item);
      const partners = screen.getByTestId("partnerspage");
      expect(partners).toBeInTheDocument();
      expect(homepage).not.toBeInTheDocument();
    });
  });
});

describe("Test language dropdown toggle button", () => {
  test("dropdown renders and disappears as expected when clicked on", () => {
    render(
      <WinstonProvider logger={logger}>
        <MemoryRouter>
          <NavigationBar />
        </MemoryRouter>
      </WinstonProvider>
    );

    const langDropdownBtn = screen.getAllByTestId("language-dropdown-btn");
    const langDropdownList = screen.getAllByTestId("language-dropdown-list");

    expect(langDropdownBtn[0]).toBeInTheDocument();
    expect(langDropdownList[0]).toHaveClass("hidden");

    fireEvent.click(langDropdownBtn[0]);
    expect(langDropdownList[0]).not.toHaveClass("hidden");

    fireEvent.click(langDropdownBtn[0]);
    expect(langDropdownList[0]).toHaveClass("hidden");
  });
});
