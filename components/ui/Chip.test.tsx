import { render, fireEvent } from '@testing-library/react';

import Chip from './Chip';

describe('<Chip />', () => {
  it('should correctly render label and number', () => {
    const { getByText } = render(
      <Chip label='Linux' number={4} onClick={() => {}} />
    );
    const label = getByText('Linux');
    const number = getByText(4);

    expect(label).toBeTruthy();
    expect(number).toBeTruthy();
  });
  it('triggers the function on click', () => {
    const mockCallback = jest.fn();
    const { getByRole } = render(
      <Chip label='Linux' number={4} onClick={mockCallback} />
    );
    const btn = getByRole('button');
    fireEvent.click(btn);
    expect(mockCallback).toHaveBeenCalled();
  });
});
