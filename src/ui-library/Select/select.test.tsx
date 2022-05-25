import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Select from './select';

const noop = jest.fn();

describe('Custom Select Input', () => {
  it('should match snapshot', () => {
    const { container } = render(<Select options={['1', '2', '3']} onChange={noop} />);
    expect(container).toMatchSnapshot();
  });

  it('should render a label', () => {
    render(<Select label={'select one'} options={['1', '2', '3']} onChange={noop} />);
    expect(screen.getByText('select one')).toBeInTheDocument();
  });

  it('should render a required symbol', () => {
    render(<Select label={'select one'} options={['1', '2', '3']} onChange={noop} required />);
    expect(screen.getByText('select one *')).toBeInTheDocument();
  });

  it('should render a placeholder', () => {
    render(<Select placeholder={'select one value'} options={['1', '2', '3']} onChange={noop} />);
    expect(screen.getByText('select one value')).toBeInTheDocument();
  });

  it('should render the correct stylesheet', async () => {
    render(
      <Select
        placeholder={'select a flavour'}
        options={['kiwi', 'pineapple', 'mango']}
        defaultValue={''}
        onChange={noop}
      />
    );
    const listboxButton = screen.getByTestId('listbox-button');
    await userEvent.click(listboxButton);
    const listbox = screen.getByRole('listbox');
    expect(listbox.firstChild).toHaveClass('selected');
  });
});

describe('select when using mouse event', () => {
  afterEach(() => {
    cleanup();
  });

  it('should select an option', async () => {
    render(<Select placeholder="choose a number" options={['a', 'b', 'c']} onChange={noop} />);
    const listboxButton = screen.getByTestId('listbox-button');
    await userEvent.click(listboxButton);
    await userEvent.selectOptions(screen.getByRole('listbox'), 'c');
    expect(listboxButton).toHaveTextContent('c');
  });
});

describe('select when using keyboard events', () => {
  beforeEach(() => {
    userEvent.tab();
  });
  afterEach(() => {
    cleanup();
  });

  it('should set focus on listbox button', async () => {
    render(<Select placeholder="choose a number" options={['a', 'b', 'c']} onChange={noop} />);
    const listboxButton = screen.getByTestId('listbox-button');
    expect(document.body).toHaveFocus();
    userEvent.tab();
    expect(listboxButton).toHaveFocus();
  });

  it('should open dropdown and set focus on it', async () => {
    render(<Select placeholder="choose a letter" options={['a', 'b', 'c']} onChange={noop} />);
    await userEvent.tab();
    await userEvent.keyboard(' ');
    const listbox = screen.getByRole('listbox');
    expect(listbox).toBeInTheDocument();
    expect(listbox).toHaveFocus();
  });

  it('should go to first value after last value in the list', async () => {
    render(<Select options={['canada', 'usa', 'mexico']} onChange={noop} />);
    const listboxButton = screen.getByTestId('listbox-button');
    await userEvent.tab();
    await userEvent.keyboard('{ArrowDown}{ArrowDown}{ArrowDown}{ArrowDown}{Enter}');
    expect(listboxButton).toHaveTextContent('canada');
  });

  it('default value should have aria-selected if default value is passed', async () => {
    render(<Select options={['canada', 'usa', 'mexico']} defaultValue={'usa'} onChange={noop} />);
    const listboxButton = screen.getByTestId('listbox-button');
    await userEvent.tab();
    await userEvent.keyboard('{ArrowDown}{Enter}');
    expect(listboxButton).toHaveTextContent('canada');
  });

  it('should select an option with arrowdown keyboard navigation', async () => {
    render(<Select placeholder="choose a letter" options={['a', 'b', 'c']} onChange={noop} />);
    const listboxButton = screen.getByTestId('listbox-button');
    await userEvent.tab();
    await userEvent.keyboard('{ArrowDown}{ArrowDown}{Enter}');
    expect(listboxButton).toHaveTextContent('a');
    expect(noop).toHaveBeenCalled();
  });

  it('should select an option with arrowup keyboard navigation', async () => {
    render(<Select options={['a', 'b', 'c']} onChange={noop} />);
    const listboxButton = screen.getByTestId('listbox-button');
    await userEvent.tab();
    await userEvent.keyboard('{ArrowUp}{ArrowUp}{ }');
    expect(listboxButton).toHaveTextContent('c');
    await userEvent.keyboard('{ArrowUp}{ArrowUp}{ }');
    expect(listboxButton).toHaveTextContent('b');
  });

  it('should give focus back to listbox button after selection', async () => {
    render(<Select placeholder="choose a letter" options={['a', 'b', 'c']} onChange={noop} />);
    const listboxButton = screen.getByTestId('listbox-button');
    await userEvent.tab();
    await userEvent.keyboard('{ArrowDown}{ArrowDown}{Enter}');
    expect(listboxButton).toHaveFocus();
  });

  it('should close dropdown', async () => {
    render(<Select placeholder="choose a letter" options={['a', 'b', 'c']} onChange={noop} />);
    const listboxButton = screen.getByTestId('listbox-button');
    await userEvent.tab();
    await userEvent.keyboard('{ArrowDown}{Tab}');
    expect(listboxButton).toHaveFocus();
    await userEvent.keyboard('{ArrowDown}{Esc}');
    expect(listboxButton).toHaveFocus();
    expect(listboxButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('should break in switch statement / should not perform any action', async () => {
    render(<Select placeholder="choose a number" options={['5', '9']} onChange={noop} />);
    const listboxButton = screen.getByTestId('listbox-button');
    await userEvent.tab();
    await userEvent.keyboard('{ArrowUp}{Ctrl}');
    expect(listboxButton).toHaveTextContent('choose a number');
  });

  it('should activate the onBlur function', async () => {
    render(
      <div>
        <Select
          placeholder="choose a character"
          options={['Twyla', 'Moira', 'Roland']}
          onChange={noop}
        />
        <input data-testid="other-input" />
      </div>
    );
    const listboxButton = screen.getByTestId('listbox-button');
    await userEvent.tab();
    await userEvent.keyboard('{ArrowDown}');
    expect(listboxButton).toHaveAttribute('aria-expanded', 'true');
    await userEvent.type(screen.getByTestId('other-input'), 'hello');
    expect(listboxButton).toHaveAttribute('aria-expanded', 'false');
  });
});
