import React, { useState } from "react";
import TextInput from "../ui-library/textInput/textInput";
import NumberInput from "../ui-library/numberInput/numberInput";

const InputExample: React.FunctionComponent = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    age: "",
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div>
      <h2>Example of a Text Input</h2>
      <TextInput
        label={"Name:"}
        name={"name"}
        value={formValues.name}
        required={true}
        onChange={onInputChange}
      />
      <h2>Example of a Number Input</h2>
      <NumberInput
        label={"Age:"}
        name={"age"}
        value={formValues.age}
        onChange={onInputChange}
        min={0}
      />
    </div>
  );
};

export default InputExample;
