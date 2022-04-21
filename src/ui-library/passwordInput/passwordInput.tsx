import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

import PasswordInputProps from "./interfaces";
import styles from "./passwordInput.module.scss";
import Button from "../button/button";

const PasswordInput = (props: PasswordInputProps): JSX.Element => {
  const {
    label = "",
    name,
    onChange,
    placeholder = "",
    value,
    maxLength = 80,
    requiredSymbol = false,
  } = props;
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const icon = showPassword ? faEyeSlash : faEye;
  const inputType = showPassword ? "text" : "password";

  return (
    <div className={styles.container}>
      <label>
        {label}
        {requiredSymbol && <>&nbsp;*</>}
        <input
          type={inputType}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          maxLength={maxLength}
          required
        />
      </label>

      <Button onClick={toggleShowPassword} variant={"icon"}>
        <FontAwesomeIcon icon={icon} />
      </Button>
    </div>
  );
};

export default PasswordInput;
