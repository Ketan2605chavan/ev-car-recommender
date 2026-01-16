import { render, screen } from "@testing-library/react";
import Recommend from "./Recommend";

// ✅ MOCK react-router navigation
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn()
}));

const renderPage = (isLoggedIn) => {
  render(<Recommend isLoggedIn={isLoggedIn} />);
};

test("renders Recommend page when logged in", () => {
  renderPage(true);

  expect(
    screen.getByText(/find recommended evs/i)
  ).toBeInTheDocument();

  expect(
    screen.getByText(/suggestions/i)
  ).toBeInTheDocument();
});

test("asks confirmation when user is not logged in", () => {
  renderPage(false);

  expect(window.confirm).toHaveBeenCalled();
});
