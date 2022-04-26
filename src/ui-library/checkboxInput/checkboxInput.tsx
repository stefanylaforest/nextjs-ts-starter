import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import CheckboxInputProps from './interfaces';
import styles from './checkboxInput.module.scss';

const CheckboxInput = (props: CheckboxInputProps): JSX.Element => {
  const { name, label, onChange, checked = false, disabled = false } = props;
  return (
    <div className={styles.container}>
      <label className={styles.checkboxContainer} data-testid="label">
        {checked && <FontAwesomeIcon icon={faCheck} />}
        <input
          type="checkbox"
          name={name}
          onChange={onChange}
          checked={checked}
          disabled={disabled}
        />
        <span className={styles.checkboxLabel}>
          <span>{label}</span>
        </span>
      </label>
    </div>
  );
};

export default CheckboxInput;
