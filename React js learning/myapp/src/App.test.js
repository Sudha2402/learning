import { render, screen } from '@testing-library/react';
import App from './App';

// this is only for testing , we can remove it

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
