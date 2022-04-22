import React from 'react';

import TextInputProps from './interfaces';

const TextInput = (props: TextInputProps): JSX.Element => {
  const {
    label = '',
    required = false,
    name,
    onChange,
    placeholder = '',
    value,
    maxLength = 80,
    readonly = false,
  } = props;

  return (
    <label>
      {label}
      {required && <>&nbsp;*</>}
      <input
        type={'text'}
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
