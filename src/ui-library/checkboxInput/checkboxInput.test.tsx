import React, { useState } from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CheckboxInput from './checkboxInput';

describe('Checkbox Input', () => {
  it('should have checked property', async () => {
    render(
      <CheckboxInput name={'test'} label={'my checkbox label'} onChange={() => {}} checked={true} />
    );
    expect(await screen.findByRole('checkbox', { name: 'my checkbox label' })).toBeChecked();
  });

  it('should set the input to checked when clicked', async () => {
    const Wrapper = () => {
      const [checked, setChecked] = useState<boolean>(false);
      return (
        <CheckboxInput
          name={'test'}
          label={'this is a test'}
          onChange={() => setChecked(!checked)}
          checked={checked}
        />
      );
    };
    render(<Wrapper />);
    const input = await screen.findByRole('checkbox', { name: 'this is a test' });
    await userEvent.click(input);
    expect(input).toBeChecked();
  });

  it('should render without crashing', () => {
    render(
      <CheckboxInput name={'test'} label={'this is a test'} onChange={() => {}} checked={true} />
    );

    expect(screen.findByRole('checkbox', { name: 'this is a test' })).toMatchSnapshot();
  });
});
