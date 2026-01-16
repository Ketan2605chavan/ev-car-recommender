import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

describe("App Component", () => {
  test("renders EV Recommender application without crashing", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Unique & stable text from Navbar
    expect(screen.getByText("EV Recommender")).toBeInTheDocument();
  });

  test("renders Home page content by default", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(
      screen.getByText(/discover the best electric cars/i)
    ).toBeInTheDocument();
  });
});
