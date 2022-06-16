import { render } from '@testing-library/react';

import PostDescription from './PostDescription';

describe('<PostDescription />', () => {
  let expectedProps: {
    title: string;
    date: string;
    category: string;
    slug: string;
    children: React.ReactNode;
  };

  beforeEach(() => {
    expectedProps = {
      title: 'How to write tests in Jest',
      date: '2021-03-18',
      category: 'React',
      slug: 'how-to-write-tests-in-jest',
      children: <p>This is not a tutorial, but a serious question</p>,
    };
  });

  it('should correctly render the props on the component', () => {
    const { getByText } = render(<PostDescription {...expectedProps} />);
    expect(getByText(expectedProps.title)).toBeTruthy();
    expect(getByText(expectedProps.date)).toBeTruthy();
    expect(getByText(expectedProps.category)).toBeTruthy();
    // click the header linking to the blog post
    expect(getByText(expectedProps.title).closest('a')).toHaveAttribute(
      'href',
      `/blog/${expectedProps.slug}`
    );
  });
});
