# Nextjs + TypeScript

A Next.js starter template in TypeScript



|**Table Of Contents**|
| :---                |
|1. [Set Up](#set-up) |
|2. [Tests](#tests) |
|3. [Icons](#icons) |
|4. [Theme](#theme) |
|5. [UI Library](#ui-library) |
|6. [Improvements](#improvements) |

## Set Up

In your terminal, run:

```
npm install
npm run dev
```

Go to `localhost:3000` to view the demo.

## Tests

To run tests, in your terminal, run:

```
npm test
```

To view coverage, in your terminal, run:

```
npm run test:coverage
```

To view coverage reports, in your terminal, run:

```
npm run test:coveragereport
```

A `coverage` directory will be created and can be found in the main directory. In the `coverage` directory, you can see an index file which can then be viewed with live server.

## Icons

Icons are from [Hero Icons](https://heroicons.com)

## Theme 

All variables are globally imported therefore you do not need to import them at the top of every scss file. 

To change any colors, fonts, variables, you may find them in the theme directory.

```
- src/
--- theme/
----- base.scss
----- colors.scss
----- constants.scss
----- fonts.scss
----- variables.scss

```

## UI Library

At this time, the UI library consists of:<br>

🧩 [Button](#button) <br>
🧩 [Card](#card) <br>
🧩 [Modal](#modal) <br>
🧩 [Toast](#toast) <br>

###### Form Elements: <br>
🧩 [Checkbox Input](#checkbox-input) <br>
🧩 [Number Input](#number-input) <br>
🧩 [Password Input](#password-input) <br>
🧩 [Select](#select) <br>
🧩 [Text Input](#text-input) <br>


### Button
<img width="544" alt="button-nextjs-ts-starter" src="https://user-images.githubusercontent.com/66086002/170540091-1f4cb4f9-e478-4c01-8c51-07febaf0c4a2.png">

Valid Props:

| Prop name      | Description | Type       | Default Prop | Required |
| :---        | :----          | :---          | :---            |  :---            |
| `variant`   |    button variant     |  `'primary'`, `'secondary'`, `'icon'`    |  | ✔️  |
| `children`    | button content            | `React.ReactNode`  | | ✔️ |
| `onClick`   |    button function     |  `() => void`    |  |  ✔️ |
| `type`   |    button type     |  `'submit'`, `'reset'`, `'button'`    | `'button'` |   |
| `disabled`  |  if true, it disables the button   |  `boolean`    | `false` |   |
| `size`   |    the size of the button   |  `'large'`, `'small'`    | `'large'` |   |
| `ariaLabel`   |    defines the aria-label for accessibility   |  `string`    |  | only if button has variant of `icon`  |

| Accepts a ref ?   |
|  :---            |
|  ✔️ | 

#### Examples: 
Primary button example:
```
        <Button variant={'primary'} onClick={onClickHandler} size={'large'}>
          My Button Content
        </Button>
 ```
 Icon button example:
 ```
        <Button variant={'icon'} onClick={closeModal} ariaLabel={'Close Modal'}>
          <MyIcon />
        </Button>
 ```

### Card

<img width="1304" alt="examples-of-cards" src="https://user-images.githubusercontent.com/66086002/170570744-1a6ffd02-6c8c-4189-80c6-9748411f364c.png">

Valid Props:

| Prop name      | Description | Type       | Default Prop | Required |
| :---        | :----          | :---          | :---            |  :---            |
| `header`   |    content of the card header     |  `string`, `React.ReactNode`   |  | See note  |
| `body`    | content of card body            | `string`, `React.ReactNode` | | See note |
| `footer`    | content of card footer          | `string`, `React.ReactNode` | | See note |

**Note**: `Card` requires at least one Prop.

#### Example: 

```
    <Card
       header={<MyImage />}
       body={<div>
              <h3>Turkish Rivieria</h3>
              <p>A week itinerary in Bodrum, Turkey</p>
             </div>}
        footer={<a href="/">Read Article</a>}
     />
```

### Modal

<img width="1789" alt="Screen Shot 2022-05-26 at 12 55 07 PM" src="https://user-images.githubusercontent.com/66086002/170572902-134f4931-de49-45b6-bc29-cfab41eb6cf6.png">

Valid Props:

| Prop name      | Description | Type       | Default Prop | Required |
| :---        | :----          | :---          | :---            |  :---            |
| `show`   |  Boolean that modal depends on to be rendered    |  `boolean`   |  | ✔️ |
| `closeModal`    | Function that closes the modal          | `() => void`  | |  ✔️ |
| `title`    | title of modal       | `string` | |  |
| `children`    | content of modal body        | `React.ReactNode` | | ✔️ |
| `footer`    | content of modal footer          | `React.ReactNode` | |  |

#### Examples: 

```
        <Modal
          show={showModal}
          closeModal={() => setShowModal(false)}
          title={'Modal Title'}
          footer={
            <Button variant={'primary'} onClick={() => setShowModal(false)} size={'small'}>
              Close Modal
            </Button>
          }
        >
```

### Toast

<img width="412" alt="toasts" src="https://user-images.githubusercontent.com/66086002/170575100-43cca26a-fb71-4644-aaf4-debef131e8fe.png">

To use, you must import the ToastContext and use the [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext) hook. 
Once imported, all you do is call the function and passing the necessary object.

```json
{
  "message": "This is an info toast",
  "type": "info",
}
```

Valid Object: 

| Keys | Description | Type       | Default Prop | Required |
| :---        | :----          | :---          | :---            |  :---            |
| `type`    | The type of toast         | `'info'`, `'success'`,  `'error'`,  `'warning'` | |  ✔️ |
| `message`    | The content of the toast | `string`,  `React.ReactNode` | |  ✔️ |


#### Example: 

```
import { useContext } from 'react';
import { ToastContext } from '<path to>/ui-library/Toast/ToastProvider';
import { ToastContextType } from '<path to>/ui-library/Toast/interfaces';

const MyComponent = (props) => {
  const toast = useContext(ToastContext) as ToastContextType;

  const fireToast = () => {
      toast.activate({
        message: 'This is an info toast',
        type: 'info',
      });
  };

return (
    <div>
      <button onClick={fireToast}>Click me to fire Toast</button>
    </div>
  )
};

export default MyComponent;
```

### Checkbox Input

<img width="265" alt="checkbox-input" src="https://user-images.githubusercontent.com/66086002/170731698-67064d10-3085-4292-af59-94ab323a3049.png">

Valid Props:

| Prop name      | Description | Type       | Default Prop | Required |
| :---        | :----          | :---          | :---            |  :---            |
| `name`      |  Name of the input    |  `string`   |  | ✔️ |
| `label`     | The checkbox's label          | `string`, `React.ReactNode`  | |  ✔️ |
| `onChange`  | Function that handles the input change | `(e: React.ChangeEvent<HTMLInputElement>) => void` | |  ✔️ |
| `checked`   | Attribute to determine if the checkbox is checked | `boolean` | | ✔️ |
| `disabled`  | disables the checkbox input | `boolean` | |  |

#### Example: 

```
        <CheckboxInput
          name={'developer'}
          label={
            <>
              I am a <span className="bold">not</span> a Developer
            </>
          }
          checked={formValues.developer}
          onChange={MyOnInputChangeFunction}
        />

```

### Number Input

<img width="311" alt="number-input" src="https://user-images.githubusercontent.com/66086002/170731766-540348d1-7d49-46c6-b039-75a12244edea.png">

Valid Props:

| Prop name      | Description | Type       | Default Prop | Required |
| :---        | :----          | :---          | :---            |  :---            |
| `name`      | |  `string`   |  | ✔️ |
| `value`      | |  `string`, `number`   |  | ✔️ |
| `onChange`  | Function that handles the input change | `(e: React.ChangeEvent<HTMLInputElement>) => void` | |  ✔️ |
| `label`     | | `string`, `React.ReactNode`  | |  |
| `placeholder` |  | `string` | |  |
| `required`  |  | `boolean` | `false` |  |
| `min`  |  | `number` | |  |
| `max`  |  | `number` | |  |
| `readonly`  |  | `boolean` | `false` |  |
| `step`  |  | `number` | `1` |  |

#### Example: 

```
          <NumberInput
            label={'Age:'}
            name={'age'}
            value={formValues.age}
            onChange={onInputChange}
            min={18}
          />

```

### Password Input

<img width="320" alt="password-input" src="https://user-images.githubusercontent.com/66086002/170731810-e64e47a6-db3c-47e0-9797-143ccea3398a.png">

Valid Props:

| Prop name      | Description | Type       | Default Prop | Required |
| :---        | :----          | :---          | :---            |  :---            |
| `name`      | |  `string`   |  | ✔️ |
| `value`      | |  `string`   |  | ✔️ |
| `onChange`  | Function that handles the input change | `(e: React.ChangeEvent<HTMLInputElement>) => void` | |  ✔️ |
| `label`     | | `string`, `React.ReactNode`  | |  |
| `placeholder` |  | `string` | |  |
| `requiredSymbol`  |  | `boolean` | `true` |  |

Note: The `PasswordInput` has a required attribute. `requiredSymbol` cannot be passed as a prop if label is not passed as a prop.

#### Example:

```
          <PasswordInput
            name={'password'}
            value={formValues.password}
            label={'Enter Your Password'}
            onChange={onInputChange}
            requiredSymbol={true}
          />
```

### Select

<img width="312" alt="select" src="https://user-images.githubusercontent.com/66086002/170731846-c163d862-c2a9-461c-8a94-963f22c58137.png">

Valid Props:

| Prop name      | Description | Type       | Default Prop | Required |
| :---        | :----          | :---          | :---            |  :---            |
| `options`      | |  `string[]`   |  | ✔️ |
| `onChange`  | Function that handles the select change | `(value: string) => void` | |  ✔️ |
| `placeholder` |  | `string` | `null` |  |
| `required`  |  | `boolean` | `false` | |
| `label`     | | `string`  | |  |
| `defaultValue`| |  `string`   | `undefined` |  |

### Example

```
          <Select
            label={'Select Country:'}
            onChange={onSelectChange}
            options={selectValues}
            placeholder={'Select A Country'}
            required={true}
            defaultValue={formValues.country}
          />

```


### Text Input

<img width="320" alt="text" src="https://user-images.githubusercontent.com/66086002/170731911-8bba61ed-cdc2-4035-8595-f709a32da7f3.png">


Valid Props:

| Prop name      | Description | Type       | Default Prop | Required |
| :---        | :----          | :---          | :---            |  :---            |
| `name`      | |  `string`   |  | ✔️ |
| `value`      | |  `string`   |  | ✔️ |
| `onChange`  | Function that handles the input change | `(e: React.ChangeEvent<HTMLInputElement>) => void` | |  ✔️ |
| `label`     | | `string` | |  |
| `required`  |  | `boolean` | `false` |  |
| `placeholder` |  | `string` | |  |
| `maxLength` |  | `number` | `80` |  |
| `readonly` |  | `boolean` | `false` |  |

### Examples

```
          <TextInput
            label={'Name:'}
            name={'name'}
            value={formValues.name}
            onChange={onInputChange}
            required={true}
          />
```

---

## Improvements
🔨👷‍♀️

- [ ] **Select**: Change `Select` to accept an object with label and value instead of an array. <img width="70" src="https://img.shields.io/badge/Priority-High-red" alt="priority high">

- [ ] **Modal**: Lock background when modal is open <img width="70" src="https://img.shields.io/badge/Priority-High-red" alt="priority high">
- [ ] **Toast**: Create a `location` prop to change where the toast is rendered. <br> ex: `bottom-left`, `bottom-right`, `middle-bottom`, `middle-top`, `top-right`, `top-left` 

If you have any suggestions for improvements, found a bug or would like to have a feature, please open an issue.
