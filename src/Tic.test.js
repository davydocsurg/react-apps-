import { render, screen } from '@testing-library/react';
import Tic from './tic-tac-toe/Tic';

test('renders learn react link', () => {
  render(<Tic />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
