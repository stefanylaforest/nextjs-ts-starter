import React, { useContext, useEffect } from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

import { ToastProvider, ToastContext } from './ToastProvider';
import { ToastContextType } from './interfaces';

interface Type {
  type: 'info' | 'success' | 'error' | 'warning';
}

const TestComponent = ({ type = 'info' }: Type) => {
  const toast = useContext(ToastContext) as ToastContextType;
  useEffect(() => {
    toast.activate({
      message: 'toast message',
      type: type,
    });
  }, []);
  return (
    <div>
      <p>test</p>
    </div>
  );
};

describe('toast component', () => {
  it('it should fire a toast', () => {
    render(
      <ToastProvider>
        <TestComponent type={'info'} />
      </ToastProvider>
    );
    expect(screen.getByRole('alert', { name: '' })).toBeInTheDocument();
  });

  it('it should container a message', () => {
    render(
      <ToastProvider>
        <TestComponent type={'info'} />
      </ToastProvider>
    );
    expect(screen.getByRole('alert', { name: '' })).toHaveTextContent('toast message');
  });

  it('it should dissmiss toast on click of close button within toast', async () => {
    render(
      <ToastProvider>
        <TestComponent type={'info'} />
      </ToastProvider>
    );
    const toast = screen.getByRole('alert', { name: '' });
    const closeButton = screen.getByRole('button', { name: 'dismiss' });
    await userEvent.click(closeButton);
    expect(toast).not.toBeInTheDocument();
  });

  it('it should render an info toast', () => {
    const { container } = render(
      <ToastProvider>
        <TestComponent type={'info'} />
      </ToastProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('it should render a success toast', () => {
    const { container } = render(
      <ToastProvider>
        <TestComponent type={'success'} />
      </ToastProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('it should render an error toast', () => {
    const { container } = render(
      <ToastProvider>
        <TestComponent type={'error'} />
      </ToastProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('it should render an warning toast', () => {
    const { container } = render(
      <ToastProvider>
        <TestComponent type={'warning'} />
      </ToastProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('it should dissapear after timer', async () => {
    jest.useFakeTimers();
    render(
      <ToastProvider>
        <TestComponent type={'warning'} />
      </ToastProvider>
    );
    const toast = screen.getByRole('alert', { name: '' });
    act(() => {
      jest.runAllTimers();
    });
    expect(toast).not.toBeInTheDocument();
    jest.useRealTimers();
  });
});
