import React from 'react';

import NumberInputProps from './interfaces';

const NumberInput: React.FunctionComponent<NumberInputProps> = (
  props
): JSX.Element => {
  const {
    label = '',
    name,
    value,
    onChange,
    required = false,
    min = '',
    max = '',
    readonly = false,
    step = 1,
  } = props;
  return (
    <label>
      {label}
      {required && <>&nbsp;*</>}
      <input
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
