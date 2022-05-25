import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import PasswordInput from './passwordInput';

const onclick = jest.fn();

describe('password input', () => {
  it('it should render a input of type password on render', () => {
    render(
      <PasswordInput
        label={'Enter Your Password'}
        name={'password'}
        value={''}
        onChange={onclick}
      />
    );
    expect(screen.getByLabelText('Enter Your Password *', { selector: 'input' })).toHaveAttribute(
      'type',
      'password'
    );
  });

  it('it should render an input of type text if the eye icon is clicked', async () => {
    render(
      <PasswordInput
        label={'Enter Your Password'}
        name={'password'}
        value={''}
        onChange={onclick}
      />
    );
    const showPasswordButton = await screen.findByRole('button', {
      name: 'Show Password',
    });
    await userEvent.click(showPasswordButton);
    expect(screen.getByLabelText('Enter Your Password *', { selector: 'input' })).toHaveAttribute(
      'type',
      'text'
    );
  });

  it('it should hide password on click of eye icon/hide password button', async () => {
    render(
      <PasswordInput
        label={'Enter Your Password'}
        name={'password'}
        value={''}
        onChange={onclick}
      />
    );
    const showPasswordButton = await screen.findByRole('button', {
      name: 'Show Password',
    });
    await userEvent.click(showPasswordButton);
    await userEvent.click(showPasswordButton);
    expect(screen.getByLabelText('Enter Your Password *', { selector: 'input' })).toHaveAttribute(
      'type',
      'password'
    );
  });

  it('it should render a label', async () => {
    render(
      <PasswordInput label={'My input label'} name={'password'} value={''} onChange={onclick} />
    );
    expect(screen.getByLabelText('My input label *')).toBeInTheDocument();
  });
});
