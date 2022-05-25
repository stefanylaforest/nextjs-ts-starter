import React, { useEffect, useState, createRef } from 'react';
import cx from 'classnames';

import ToastProps from './interfaces';
import { BasicToast } from './interfaces';
import styles from './toast.module.scss';
import Button from '../Button/button';
import XIcon from '../../icons/x.svg';
import WarningIcon from '../../icons/warning.svg';
import ErrorIcon from '../../icons/error.svg';
import SuccessIcon from '../../icons/check-circle.svg';
import InfoIcon from '../../icons/info.svg';

const Toast = (props: ToastProps) => {
  const [show, setShow] = useState<boolean>(true);
  const { message, remove, type, id } = props;
  const ref = createRef<HTMLButtonElement>();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const renderToastIcon = (type: BasicToast['type']) => {
    switch (type) {
      case 'info':
        return <InfoIcon />;
      case 'success':
        return <SuccessIcon />;
      case 'error':
        return <ErrorIcon />;
      case 'warning':
        return <WarningIcon />;
    }
  };

  const setFocus = () => {
    ref.current && ref.current.focus();
  };

  useEffect(() => {
    setFocus();
  }, []);

  if (!show) {
    return null;
  }
  return (
    <div className={cx(styles.container, styles[type], styles.animate)} role="alert">
      <div className={cx(styles.rightCol)}>
        {renderToastIcon(type)} {message}
      </div>
      <div className={styles.leftCol}>
        <Button variant="icon" onClick={() => remove(id)} ariaLabel="dismiss" ref={ref}>
          <XIcon />
        </Button>
      </div>
    </div>
  );
};

export default Toast;
