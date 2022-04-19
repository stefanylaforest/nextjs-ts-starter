import React, { useState } from "react";
import TextInput from "../ui-library/textInput/textInput";
import NumberInput from "../ui-library/numberInput/numberInput";
import Select from "../ui-library/select/select";

const Demo: React.FunctionComponent = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    age: "",
    country: "",
  });

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const selectValues = ["canada", "usa"];

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
      <h2>Example of a Select Input</h2>
      <Select
        label={"Select Country:"}
        name={"country"}
        onChange={onInputChange}
        options={selectValues}
        placeholder={"Select A Country"}
      />
    </div>
  );
};

export default Demo;
