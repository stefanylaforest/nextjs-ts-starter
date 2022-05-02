import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Select from './select';

describe('Select input', () => {
  it('should have a placeholder option', () => {
    render(
      <Select
        placeholder="choose a number"
        name={'choose one'}
        options={['1', '2', '3']}
        onChange={jest.fn()}
      />
    );
    expect(screen.getByRole('option', { name: 'choose a number' })).toHaveValue('');
  });

  it('should select an option', async () => {
    render(<Select name={'choose one'} options={['1', '2', '3']} onChange={jest.fn()} />);
    await userEvent.selectOptions(screen.getByRole('combobox'), '3');
    expect((screen.getByRole('option', { name: '1' }) as HTMLOptionElement).selected).toBe(false);
    expect((screen.getByRole('option', { name: '2' }) as HTMLOptionElement).selected).toBe(false);
    expect((screen.getByRole('option', { name: '3' }) as HTMLOptionElement).selected).toBe(true);
  });

  it('should have a default value', () => {
    render(
      <Select
        name={'choose one'}
        options={['a', 'b', 'c']}
        onChange={jest.fn()}
        defaultValue={'b'}
      />
    );
    expect((screen.getByRole('option', { name: 'a' }) as HTMLOptionElement).selected).toBe(false);
    expect((screen.getByRole('option', { name: 'b' }) as HTMLOptionElement).selected).toBe(true);
    expect((screen.getByRole('option', { name: 'c' }) as HTMLOptionElement).selected).toBe(false);
  });

  it('should render a label', () => {
    render(
      <Select
        name={'choose'}
        label={'Please select an option'}
        options={['1a', '2a', '3a']}
        onChange={jest.fn()}
        defaultValue={'3a'}
      />
    );
    expect(screen.getByLabelText('Please select an option')).toBeInTheDocument();
  });

  it('should render a required symbol', () => {
    render(
      <Select
        name={'choose'}
        label={'Please select an option'}
        options={['1a', '2a', '3a']}
        onChange={jest.fn()}
        defaultValue={'3a'}
        required={true}
      />
    );
    expect(screen.getByLabelText('Please select an option *')).toBeInTheDocument();
  });
});
