import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("App component", () => {
  test("renders EV Recommender brand text", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // ✅ Use getAllByText to avoid 'multiple elements found' error
    const brandTexts = screen.getAllByText(/EV Recommender/i);
    expect(brandTexts.length).toBeGreaterThan(0);
  });
});
