import { render, screen } from '@testing-library/react';
import SelectSort from './SelectSort';

test('renders learn react link', () => {
  render(<SelectSort />);
  const linkElement = screen.getByText(/Sort By/i);
  expect(linkElement).toBeInTheDocument();
});
