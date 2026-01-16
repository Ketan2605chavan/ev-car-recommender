import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

describe("App Component", () => {
  test("renders EV Recommender text", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(
      screen.getByText(/EV Recommender/i)
    ).toBeInTheDocument();
  });
});
