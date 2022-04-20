import React from "react";

import ButtonProps from "./interfaces";
import styles from "./button.module.scss";

const Button = (props: ButtonProps) => {
  const {
    isPrimary = true,
    children,
    onClick,
    disabled = false,
    type = "button",
  } = props;
  const stylesheet = isPrimary ? styles.primary : styles.secondary;
  return (
    <button
      className={stylesheet}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
