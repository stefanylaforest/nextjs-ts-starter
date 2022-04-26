import React from 'react';
import { render } from '@testing-library/react';
import Card from './card';

describe('Card Component', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Card
        header={<h3>Hello World</h3>}
        body={<img src="images/card-photo-example-1.jpg" alt="" />}
        footer={'read more'}
      />
    );
    expect(container).toMatchSnapshot();
  });
  it('should have a footer', () => {
    const { container } = render(<Card footer={'view'} />);
    expect(container).toMatchSnapshot();
  });
});
