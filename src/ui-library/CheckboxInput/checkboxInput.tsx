import React from 'react';

import CheckboxInputProps from './interfaces';
import styles from './checkboxInput.module.scss';
import CheckIcon from '../../icons/check.svg';

const CheckboxInput = (props: CheckboxInputProps) => {
  const { name, label, onChange, checked, disabled = false } = props;
  return (
    <div className={styles.container}>
      <label className={styles.checkboxContainer} data-testid="label">
        <input
          type="checkbox"
          name={name}
          onChange={onChange}
          checked={checked}
          disabled={disabled}
        />
        <span className={styles.checkboxLabel}>
          {checked && <CheckIcon />}
          <span>{label}</span>
        </span>
      </label>
    </div>
  );
};

export default CheckboxInput;
