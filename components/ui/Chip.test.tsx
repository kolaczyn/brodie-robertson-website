import Chip from './Chip';
import { render } from '@testing-library/react';

describe('<Chip />', () => {
  it('should correctly show label and number', () => {
    const { getByText } = render(
      <Chip label='Linux' number={4} onClick={() => {}} />
    );
    const label = getByText('Linux');
    const number = getByText(4);

    expect(label).toBeTruthy();
    expect(number).toBeTruthy();
  });
});
