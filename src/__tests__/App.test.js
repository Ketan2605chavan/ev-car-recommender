import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

describe("EV Car Recommender – Basic Functional Tests", () => {

  test("App loads successfully", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(
      screen.getByText(/EV Recommender/i)
    ).toBeInTheDocument();
  });

  test("Home page renders correctly", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(
      screen.getByText(/Find recommended EVs/i)
    ).toBeInTheDocument();
  });

  test("Budget and Range inputs are present", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(
      screen.getByLabelText(/Budget/i)
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/Minimum Range/i)
    ).toBeInTheDocument();
  });

  test("Show Recommendations button is present", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(
      screen.getByRole("button", { name: /show recommendations/i })
    ).toBeInTheDocument();
  });

  test("User can type values in inputs", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const budgetInput = screen.getByLabelText(/Budget/i);
    const rangeInput = screen.getByLabelText(/Minimum Range/i);

    fireEvent.change(budgetInput, { target: { value: "Mid" } });
    fireEvent.change(rangeInput, { target: { value: "200" } });

    expect(budgetInput.value).toBe("Mid");
    expect(rangeInput.value).toBe("200");
  });

});
