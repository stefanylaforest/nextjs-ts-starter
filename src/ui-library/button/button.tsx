import React from 'react';
import cx from 'classnames';

import ButtonProps from './interfaces';
import styles from './button.module.scss';

const Button = (props: ButtonProps) => {
  const { variant, children, onClick, disabled, type = 'button', size = 'large' } = props;

  const stylesheet = variant === 'icon' ? styles.icon : cx(styles[variant], styles[size]);
  const hasAriaLabel = 'ariaLabel' in props ? props.ariaLabel : undefined;
  return (
    <button
      className={stylesheet}
      onClick={onClick}
      type={type}
      aria-label={hasAriaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
