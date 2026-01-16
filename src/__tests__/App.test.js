import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

describe("EV Car Recommender App – Basic Tests", () => {

  test("renders EV Recommender title", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByText(/EV Recommender/i)).toBeInTheDocument();
  });

  test("renders Login page when navigated", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText(/Login/i));
    expect(screen.getByText(/Email/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
  });

  test("renders Recommend page", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText(/Recommend/i));
    expect(screen.getByText(/Find recommended EVs/i)).toBeInTheDocument();
  });

});
