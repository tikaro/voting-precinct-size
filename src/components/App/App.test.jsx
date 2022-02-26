import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the headline', () => {
  render(<App />);
  const linkElement = screen.getByText(/Voting Precinct Size/i);
  expect(linkElement).toBeInTheDocument();
});
