import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import styles from "./select.module.scss";

interface SelectProps {
  name: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  required?: boolean;
  label?: string;
  defaultValue?: string;
}

const Select = (props: SelectProps) => {
  const {
    onChange,
    name,
    options,
    required = false,
    placeholder = null,
    label,
    defaultValue = undefined,
  } = props;
  return (
    <div>
      {label && (
        <label htmlFor={name}>
          {label}
          {required && <>&nbsp;*</>}
        </label>
      )}
      <div className={styles.arrowSelect}>
        <select
          onChange={onChange}
          name={name}
          required={required}
          value={defaultValue}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </div>
  );
};

export default Select;
