import React, { useState, useId } from 'react';

import PasswordInputProps from './interfaces';
import styles from './passwordInput.module.scss';
import Button from '../Button/button';
import EyeSlashIcon from '../../icons/eye-slash.svg';
import EyeIcon from '../../icons/eye.svg';

const PasswordInput = (props: PasswordInputProps) => {
  const { label, name, onChange, placeholder, value, requiredSymbol = true } = props;
  const [showPassword, setShowPassword] = useState(false);
  const password = useId();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const inputType = showPassword ? 'text' : 'password';
  const accessibilityText = showPassword ? 'Hide Password' : 'Show Password';

  return (
    <div className={styles.container}>
      <label htmlFor={password}>
        {label}
        {label && requiredSymbol && <>&nbsp;*</>}
        <input
          id={password}
          type={inputType}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          required
        />
      </label>

      <Button onClick={toggleShowPassword} variant={'icon'} ariaLabel={accessibilityText}>
        {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
      </Button>
    </div>
  );
};

export default PasswordInput;
