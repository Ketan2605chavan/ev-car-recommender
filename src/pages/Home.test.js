import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

test("renders Home page hero text", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  expect(
    screen.getByText(/discover the best electric cars/i)
  ).toBeInTheDocument();
});
