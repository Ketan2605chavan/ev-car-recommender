import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";

beforeAll(() => {
  jest.spyOn(window, "alert").mockImplementation(() => {});
});

afterAll(() => {
  window.alert.mockRestore();
});

const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

test("renders Login page", () => {
  renderWithRouter(<Login />);

  expect(
    screen.getByRole("heading", { name: /login/i })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("button", { name: /login/i })
  ).toBeInTheDocument();
});

test("shows alert if email or password is empty", () => {
  renderWithRouter(<Login />);

  fireEvent.click(screen.getByRole("button", { name: /login/i }));

  expect(window.alert).toHaveBeenCalled();
});

test("submits form when email and password are entered", () => {
  const onLoginMock = jest.fn();

  renderWithRouter(<Login onLogin={onLoginMock} />);

  fireEvent.change(screen.getByPlaceholderText(/you@example.com/i), {
    target: { value: "test@example.com" },
  });

  fireEvent.change(screen.getByPlaceholderText(/password/i), {
    target: { value: "123456" },
  });

  fireEvent.click(screen.getByRole("button", { name: /login/i }));

  expect(onLoginMock).toHaveBeenCalled();
});
