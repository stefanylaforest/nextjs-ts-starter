import React from "react";

export interface TextInputProps {
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  required?: boolean;
  placeholder?: string;
  maxLength?: number;
  readonly?: boolean;
}

const TextInput = (props: TextInputProps) => {
  const {
    label = "",
    required = false,
    name,
    onChange,
    placeholder = "",
    value,
    maxLength = 80,
    readonly = false,
  } = props;

  return (
    <label>
      {label}
      {required && <>&nbsp;*</>}
      <input
        type={"text"}
        name={name}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
        readOnly={readonly}
      />
    </label>
  );
};

export default TextInput;
