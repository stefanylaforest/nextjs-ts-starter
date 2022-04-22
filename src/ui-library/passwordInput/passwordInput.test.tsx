import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import PasswordInput from './passwordInput';

afterEach(cleanup);

it('it should render a input of type password on render', () => {
  render(
    <PasswordInput
      label={'Enter Your Password'}
      name={'password'}
      value={''}
      onChange={() => console.log('test')}
    />
  );
  expect(
    screen.getByLabelText('Enter Your Password', { selector: 'input' })
  ).toHaveAttribute('type', 'password');
});

it('it should render an input of type text if the eye icon is clicked', async () => {
  render(
    <PasswordInput
      label={'Enter Your Password'}
      name={'password'}
      value={''}
      onChange={() => console.log('test')}
    />
  );
  const showPasswordButton = await screen.findByRole('button', {
    name: 'Show Password',
  });
  await userEvent.click(showPasswordButton);
  expect(
    screen.getByLabelText('Enter Your Password', { selector: 'input' })
  ).toHaveAttribute('type', 'text');
});

it('it should hide password on click of eye icon/hide password button', async () => {
  render(
    <PasswordInput
      label={'Enter Your Password'}
      name={'password'}
      value={''}
      onChange={() => console.log('test')}
    />
  );
  const showPasswordButton = await screen.findByRole('button', {
    name: 'Show Password',
  });
  await userEvent.click(showPasswordButton);
  await userEvent.click(showPasswordButton);
  expect(
    screen.getByLabelText('Enter Your Password', { selector: 'input' })
  ).toHaveAttribute('type', 'password');
});

it('it should render a label', async () => {
  render(
    <PasswordInput
      label={'My input label'}
      name={'password'}
      value={''}
      onChange={() => console.log('test')}
    />
  );
  expect(screen.getByLabelText('My input label')).toBeInTheDocument();
});
