import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer', () => {
  render(<Footer />);
  expect(screen.getByText(/©|copyright/i)).toBeInTheDocument();
});
