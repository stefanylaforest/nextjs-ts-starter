import React from "react";

import ButtonProps from "./interfaces";
import styles from "./button.module.scss";

const Button = (props: ButtonProps): JSX.Element => {
  const {
    variant = "primary",
    children,
    onClick,
    disabled = false,
    type = "button",
    size = "large",
    ariaLabel,
  } = props;
  const stylesheet =
    variant === "icon" ? styles.icon : styles[`${variant}-${size}`];
  return (
    <button
      className={stylesheet}
      onClick={onClick}
      disabled={disabled}
      type={type}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
