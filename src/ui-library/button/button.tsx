import React from "react";

import ButtonProps from "./interfaces";
import styles from "./button.module.scss";

const Button = (props: ButtonProps): JSX.Element => {
  const {
    variant = "primary",
    children,
    onClick,
    disabled,
    type = "button",
    size = "large",
    ariaLabel,
  } = props;
  const stylesheet =
    variant === "icon" ? styles.icon : styles[`${variant}-${size}`];

  const isDisabled = disabled ? { disabled: true } : {};
  return (
    <button
      className={stylesheet}
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}
      {...isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
