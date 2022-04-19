import React, { useState } from "react";
import TextInput from "../ui-library/textInput/textInput";
import NumberInput from "../ui-library/numberInput/numberInput";
import Select from "../ui-library/select/select";
import CheckboxInput from "../ui-library/checkboxInput/checkboxInput";

const Demo: React.FunctionComponent = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    age: "",
    country: "",
    petOwner: false,
    employed: true,
  });

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    const val = type === "checkbox" ? checked : value;
    setFormValues({ ...formValues, [name]: val });
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
        required={true}
      />
      <h2>Example of a Checkbox Input</h2>
      <CheckboxInput
        name={"petOwner"}
        label={
          <>
            Are You A Pet <span className="bold">Owner?</span>
          </>
        }
        checked={formValues.petOwner}
        onChange={onInputChange}
        disabled={true}
      />
      <CheckboxInput
        name={"employed"}
        label={"Are You Currently Employed?"}
        checked={formValues.employed}
        onChange={onInputChange}
      />
    </div>
  );
};

export default Demo;
