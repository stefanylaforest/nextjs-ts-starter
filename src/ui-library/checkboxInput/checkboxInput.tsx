import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import CheckboxInputProps from './interfaces';
import styles from './checkboxInput.module.scss';

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
          {checked && <FontAwesomeIcon icon={faCheck} />}
          <span>{label}</span>
        </span>
      </label>
    </div>
  );
};

export default CheckboxInput;
