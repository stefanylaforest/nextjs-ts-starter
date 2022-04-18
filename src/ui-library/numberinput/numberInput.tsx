import React from "react";

import styles from "./numberInput.module.scss";

interface NumberInputProps {
  label: string;
  name: string;
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  min?: number;
  max?: number;
  readonly?: boolean;
  step?: number;
}

const NumberInput: React.FunctionComponent<NumberInputProps> = (props) => {
  const {
    label = "",
    name,
    value,
    onChange,
    required = false,
    min = "",
    max = "",
    readonly = false,
    step = 1,
  } = props;
  return (
    <label className={styles.label}>
      {label}
      {required && <>&nbsp;*</>}
      <input
        className={styles.input}
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        min={min}
        max={max}
        readOnly={readonly}
        step={step}
      />
    </label>
  );
};

export default NumberInput;
