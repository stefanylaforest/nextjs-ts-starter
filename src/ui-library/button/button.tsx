import React from 'react';

import ButtonProps from './interfaces';
import styles from './button.module.scss';

const Button = (props: ButtonProps) => {
  const { variant, children, onClick, disabled, type = 'button', size = 'large' } = props;

  const stylesheet = variant === 'icon' ? styles.icon : styles[`${variant}-${size}`];
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
