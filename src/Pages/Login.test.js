import { render, screen } from '@testing-library/react';
import Login from './Login';

test('renders login form', () => {
  render(<Login />);
  const emailField = screen.getByPlaceholderText('example@test.com');
  expect(emailField).toBeInTheDocument();
});
