import React, { useState } from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import NumberInput from './numberInput';

describe('number input', () => {
  it('should not allow letters to be entered', async () => {
    const Wrapper = () => {
      const [value, setValue] = useState<string>('');
      return (
        <NumberInput
          name="amount"
          value={value}
          placeholder="Enter an amount"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        />
      );
    };
    render(<Wrapper />);
    const input = screen.getByPlaceholderText('Enter an amount');
    await userEvent.type(screen.getByPlaceholderText('Enter an amount'), 'ten');
    expect((input as HTMLInputElement).value).toBe('');
  });

  it('should have required attribute', async () => {
    render(
      <NumberInput
        name="amount"
        value={'10'}
        onChange={() => {}}
        placeholder={'Enter your age'}
        label={'Age'}
        required
      />
    );
    expect(screen.getByPlaceholderText('Enter your age')).toBeRequired();
  });
});
