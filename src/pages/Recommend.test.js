import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Recommend from "./Recommend";

const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("Recommend page inputs", () => {
  test("renders budget and minimum range inputs", () => {
    renderWithRouter(<Recommend isLoggedIn={true} />);

    // Budget input
    expect(
      screen.getByPlaceholderText(/e.g., Mid/i)
    ).toBeInTheDocument();

    // Minimum range input
    expect(
      screen.getByDisplayValue("150")
    ).toBeInTheDocument();
  });

  test("allows user to change budget input", () => {
    renderWithRouter(<Recommend isLoggedIn={true} />);

    const budgetInput = screen.getByPlaceholderText(/e.g., Mid/i);
    fireEvent.change(budgetInput, { target: { value: "Low" } });

    expect(budgetInput.value).toBe("Low");
  });

  test("allows user to change minimum range input", () => {
    renderWithRouter(<Recommend isLoggedIn={true} />);

    const rangeInput = screen.getByDisplayValue("150");
    fireEvent.change(rangeInput, { target: { value: "300" } });

    expect(rangeInput.value).toBe("300");
  });

  test("renders Show Recommendations button", () => {
    renderWithRouter(<Recommend isLoggedIn={true} />);

    expect(
      screen.getByRole("button", { name: /show recommendations/i })
    ).toBeInTheDocument();
  });
});
