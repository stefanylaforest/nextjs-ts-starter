import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import styles from "./checkboxInput.module.scss";

interface CheckboxInputProps {
  name: string;
  label: string | React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  disabled?: boolean;
}

const CheckboxInput = (props: CheckboxInputProps) => {
  const { name, label, onChange, checked = false, disabled = false } = props;
  return (
    <div className={styles.container}>
      <label className={styles.checkboxContainer}>
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
