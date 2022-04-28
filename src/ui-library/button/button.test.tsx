import React from 'react';
import { screen, render } from '@testing-library/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import Button from './button';
import userEvent from '@testing-library/user-event';

const onClick = jest.fn();

describe('Icon Only Button', () => {
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
  it('should render a large primary button if no variant or size is defined', () => {
    render(
      <Button variant={'primary'} onClick={() => console.log('clicked')}>
        Primary Button
      </Button>
    );
    expect(screen.getByRole('button', { name: 'Primary Button' })).toHaveClass('primary-large');
  });

  it('should be disabled', async () => {
    render(
      <Button onClick={onClick} disabled={true} variant={'secondary'}>
        Secondary Button
      </Button>
    );
    userEvent.click(await screen.findByRole('button', { name: 'Secondary Button' }));
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
