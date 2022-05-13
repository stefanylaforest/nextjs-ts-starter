import React, { useRef } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FocusLock from 'react-focus-lock';

import ModalProps from './interfaces';
import styles from './modal.module.scss';
import Button from '../button/button';

const Modal = (props: ModalProps) => {
  const { show, closeModal, title, children, footer = undefined } = props;
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: React.MouseEvent<HTMLElement>) => {
    if (modalRef && modalRef.current && modalRef.current.contains(e.target as Node)) {
      return;
    }
    closeModal();
  };

  if (!show) {
    return null;
  }
  return (
    <FocusLock returnFocus={true}>
      <div
        className={styles.bodyOverlay}
        data-testid={'modal'}
        onClick={(e) => handleOutsideClick(e)}
        role="button"
      >
        <div className={styles.modalWrapper} ref={modalRef} role="dialog">
          <div className={styles.header}>
            {title && <h2>{title}</h2>}
            <Button variant={'icon'} onClick={closeModal} ariaLabel={'Close Modal'}>
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </div>
          <div className={styles.body}>{children}</div>
          {footer && (
            <div className={styles.footer} data-testid="modal-actions">
              {footer}
            </div>
          )}
        </div>
      </div>
    </FocusLock>
  );
};

export default Modal;
