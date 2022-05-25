import React, { useState } from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TextInput from './textInput';

describe('Text Input', () => {
  it('it should respect the max length', async () => {
    const Wrapper = () => {
      const [value, setValue] = useState<string>('');
      return (
        <TextInput
          name={'test'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
          value={value}
          placeholder={'enter code'}
          maxLength={4}
        />
      );
    };
    render(<Wrapper />);

    const input = screen.getByPlaceholderText('enter code');
    await userEvent.type(screen.getByPlaceholderText('enter code'), 'abcde');
    expect((input as HTMLInputElement).value).toBe('abcd');
  });

  it('should be readonly', async () => {
    const isReadonly = true;
    render(
      <TextInput value={'Montreal'} name={'city'} onChange={jest.fn()} readonly={isReadonly} />
    );
    const input = await screen.findByRole('textbox', { name: '' });
    await userEvent.type(input, 'Toronto');
    expect((input as HTMLInputElement).value).toBe('Montreal');
  });

  it('should have a * to required labels', () => {
    render(
      <TextInput
        label={'Your name:'}
        value={''}
        name={'name'}
        onChange={jest.fn()}
        required={true}
      />
    );
    expect(screen.getByLabelText('Your name: *')).toBeInTheDocument();
  });
});
