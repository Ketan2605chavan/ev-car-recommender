import { render, screen } from '@testing-library/react';
import App from '../App';

describe('EV Car Recommender App', () => {

  test('renders application without crashing', () => {
    render(<App />);
    expect(screen.getByText(/EV/i)).toBeInTheDocument();
  });

  test('renders main navigation or heading', () => {
    render(<App />);
    const heading = screen.getAllByText(/car|recommend|ev/i);
    expect(heading.length).toBeGreaterThan(0);
  });

});
