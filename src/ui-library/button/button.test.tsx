import React from 'react';
import { screen, render } from '@testing-library/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import Button from './button';
import userEvent from '@testing-library/user-event';

const onClick = jest.fn();

describe('Icon Only Button', () => {
  it('should render the variant "icon" ', () => {
    render(
      <Button onClick={onClick} ariaLabel={'Go back'} variant={'icon'}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Button>
    );
    expect(screen.getByRole('button', { name: 'Go back' })).toHaveClass('icon');
  });

  it('It should have an aria-label attribute ', () => {
    render(
      <Button onClick={onClick} ariaLabel={'Go to Cart'} variant={'icon'}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </Button>
    );
    expect(screen.getByRole('button', { name: 'Go to Cart' })).toHaveAttribute('aria-label');
  });

  it('It should render without crashing', () => {
    render(
      <Button onClick={onClick} ariaLabel={'Go to Cart'} variant={'icon'}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </Button>
    );
    expect(screen.getByRole('button', { name: 'Go to Cart' })).toMatchSnapshot();
  });
});

describe('primary or secondary button', () => {
  it('should render be a primary button', () => {
    render(
      <Button variant={'primary'} onClick={onClick}>
        A primary button
      </Button>
    );
    expect(screen.getByRole('button', { name: 'A primary button' })).toMatchSnapshot();
  });

  it('should render a large button if no size is defined', () => {
    render(
      <Button variant={'primary'} onClick={onClick}>
        Primary Button
      </Button>
    );
    expect(screen.getByRole('button', { name: 'Primary Button' })).toHaveClass('primary-large');
  });

  it('should be disabled', async () => {
    const { container } = render(
      <Button onClick={onClick} variant={'primary'} disabled>
        Submit
      </Button>
    );
    await userEvent.click(container);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('It should render without crashing', () => {
    render(
      <Button onClick={onClick} disabled={true} variant={'secondary'}>
        Secondary Button
      </Button>
    );
    expect(screen.getByRole('button', { name: 'Secondary Button' })).toMatchSnapshot();
  });
});
