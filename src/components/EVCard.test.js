import { render, screen, fireEvent } from "@testing-library/react";
import EVCard from "./EVCard";

const mockEv = {
  name: "Tesla Model 3",
  range: 500,
  price: "50,00,000",
  image: "broken-image.jpg",
  description: "Test EV description",
};

test("renders EVCard with EV details", () => {
  render(<EVCard ev={mockEv} />);

  expect(screen.getByText(/Tesla Model 3/i)).toBeInTheDocument();
  expect(screen.getByText(/500 km/i)).toBeInTheDocument();
  expect(screen.getByText(/50,00,000/i)).toBeInTheDocument();
  expect(screen.getByText(/Test EV description/i)).toBeInTheDocument();
});

test("shows fallback image when image fails to load", () => {
  render(<EVCard ev={mockEv} />);

  const img = screen.getByAltText(/Tesla Model 3/i);

  // 🔥 trigger onError manually
  fireEvent.error(img);

  expect(img.src).toContain("placeholder.com");
});
