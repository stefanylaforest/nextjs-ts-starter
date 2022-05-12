import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ToastProps from './interfaces';
import styles from './toast.module.scss';
import Button from '../button/button';

const Toast = (props: ToastProps) => {
  const [show, setShow] = useState<boolean>(true);
  const { message, remove, type = 'info', id } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) {
    return null;
  }
  return (
    <div className={cx(styles.container, styles[type], styles.animate)} role="alert">
      <div className={cx(styles.rightCol)}>{message}</div>
      <div className={styles.leftCol}>
        <Button variant="icon" onClick={() => remove(id)} ariaLabel="dismiss">
          <FontAwesomeIcon icon={faTimes} />
        </Button>
      </div>
    </div>
  );
};

export default Toast;
