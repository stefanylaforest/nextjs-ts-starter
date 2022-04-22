import React, { useState } from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Modal from './modal';

afterEach(cleanup);

describe('Modal', (): void => {
  it('should render without crashing ', (): void => {
    render(<Modal show={true} closeModal={() => {}} />);
    expect(screen.getByTestId('modal')).toMatchSnapshot();
  });

  it('should render a close button', (): void => {
    render(<Modal show={true} closeModal={() => {}} />);
    expect(
      screen.getByRole('button', { name: 'Close Modal' })
    ).toBeInTheDocument();
  });

  it('should open if show prop is true', async () => {
    const Wrapper = () => {
      const [showModal, setShowModal] = useState<boolean>(true);
      return <Modal show={showModal} closeModal={() => setShowModal(false)} />;
    };
    render(<Wrapper />);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });

  it('should close modal on click of close button', async () => {
    const Wrapper = () => {
      const [showModal, setShowModal] = useState<boolean>(true);
      return <Modal show={showModal} closeModal={() => setShowModal(false)} />;
    };
    render(<Wrapper />);
    const modal = screen.getByTestId('modal');
    const closeBtn = screen.getByRole('button', { name: 'Close Modal' });
    await userEvent.click(closeBtn);
    expect(modal).not.toBeInTheDocument();
  });
});
