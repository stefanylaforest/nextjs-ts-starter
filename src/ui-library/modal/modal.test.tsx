import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Modal from './modal';

const onClick = jest.fn();

describe('Modal', (): void => {
  it('should render without crashing ', () => {
    render(
      <Modal show={true} closeModal={onClick}>
        <p>A message</p>
      </Modal>
    );
    expect(screen.getByTestId('modal')).toMatchSnapshot();
  });

  it('should show if "show" prop is true', () => {
    render(
      <Modal show={true} closeModal={onClick}>
        <p>A message</p>
      </Modal>
    );
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });

  it('show not render if prop is false', () => {
    const { container } = render(
      <Modal show={false} closeModal={onClick}>
        <p>Modal Message</p>
      </Modal>
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('should render a close button', () => {
    render(
      <Modal show={true} closeModal={onClick}>
        <p>A message</p>
      </Modal>
    );
    expect(screen.getByRole('button', { name: 'Close Modal' })).toBeInTheDocument();
  });

  it('should render a title', async () => {
    render(
      <Modal show={true} closeModal={onClick} title={'A title'}>
        <p>A message</p>
      </Modal>
    );
    expect(await screen.findByRole('heading', { name: 'A title' })).toBeInTheDocument();
  });

  it('should render a footer', async () => {
    render(
      <Modal
        show={true}
        closeModal={onClick}
        footer={
          <div>
            <button>ok</button>
            <button>cancel</button>
          </div>
        }
      >
        <p>A message</p>
      </Modal>
    );
    expect(screen.getByTestId('modal-actions')).toBeInTheDocument();
  });

  it('should close modal on click of close button', async () => {
    render(
      <Modal show={true} closeModal={onClick}>
        <p>A message</p>
      </Modal>
    );
    const closeBtn = screen.getByRole('button', { name: 'Close Modal' });
    await userEvent.click(closeBtn);
    expect(onClick).toHaveBeenCalled();
  });

  it('should close close modal on outside click', async () => {
    const onClose = jest.fn();
    render(
      <Modal show={true} closeModal={onClose}>
        <p>A message</p>
      </Modal>
    );
    const modalContainer = screen.getByTestId('modal');
    await userEvent.click(modalContainer);
    expect(onClose).toHaveBeenCalled();
  });
});
