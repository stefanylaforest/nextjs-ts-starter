import React, { useState, useContext } from 'react';

import styles from './demo.module.scss';

import TextInput from '../../ui-library/TextInput/textInput';
import NumberInput from '../../ui-library/NumberInput/numberInput';
import Select from '../../ui-library/Select/select';
import CheckboxInput from '../../ui-library/CheckboxInput/checkboxInput';
import Card from '../../ui-library/Card/card';
import Button from '../../ui-library/Button/button';
import Modal from '../../ui-library/Modal/modal';
import PasswordInput from '../../ui-library/PasswordInput/passwordInput';
import { FormValues } from './interfaces';
import { ToastContext } from '../../ui-library/Toast/ToastProvider';
import { ToastContextType } from '../../ui-library/Toast/interfaces';

const Demo: React.FunctionComponent = (): JSX.Element => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    age: '',
    country: 'mexico',
    developer: false,
    employed: true,
    password: '',
  });
  const [showModal, setShowModal] = useState<boolean>(false);
  const toast = useContext(ToastContext) as ToastContextType;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    const val = type === 'checkbox' ? checked : value;
    setFormValues({ ...formValues, [name]: val });
  };

  const onSelectChange = (value: string) => {
    setFormValues({ ...formValues, country: value });
  };

  const selectValues: string[] = ['canada', 'usa', 'mexico'];

  const onClickHandler = () => {
    console.log('clicked');
  };

  const handleWarning = () => {
    toast.activate({
      message: 'This is a warning toast',
      type: 'warning',
    });
  };
  const handleSuccess = () => {
    toast.activate({
      message: 'This is a success toast',
      type: 'success',
    });
  };

  const handleError = () => {
    toast.activate({
      message: 'This is an error toast',
      type: 'error',
    });
  };

  const handleInfo = () => {
    toast.activate({
      message: 'This is an info toast',
      type: 'info',
    });
  };

  return (
    <div>
      <h1>UI Library Demo</h1>
      <h2>Form Components</h2>
      <div className={styles.section}>
        <div className={styles.column}>
          <h3>Example of a Text Input</h3>
          <TextInput
            label={'Name:'}
            name={'name'}
            value={formValues.name}
            required={true}
            onChange={onInputChange}
          />
          <h3>Example of a Number Input</h3>
          <NumberInput
            label={'Age:'}
            name={'age'}
            value={formValues.age}
            onChange={onInputChange}
            min={0}
          />
        </div>
        <div className={styles.column}>
          <h3>Example of a Select Input</h3>
          <Select
            label={'Select Country:'}
            onChange={onSelectChange}
            options={selectValues}
            placeholder={'Select A Country'}
            required={true}
            defaultValue={formValues.country}
          />
          <h3>Password Input</h3>
          <PasswordInput
            name={'password'}
            value={formValues.password}
            label={'Enter Your Password'}
            onChange={onInputChange}
          />
        </div>
      </div>
      <div className={styles.maxWidth}>
        <h3>Example of a Checkbox Input</h3>
        <CheckboxInput
          name={'developer'}
          label={
            <>
              I am a <span className="bold">not</span> a Developer
            </>
          }
          checked={formValues.developer}
          onChange={onInputChange}
          disabled={true}
        />
        <CheckboxInput
          name={'employed'}
          label={'I am currently employed.'}
          checked={formValues.employed}
          onChange={onInputChange}
        />
      </div>
      <div>
        <h2>Card</h2>
        <div className={styles.container}>
          <Card
            header={
              <img
                src="/images/card-photo-example-1.jpg"
                alt="Photo by Veronika Jorjobert on Unsplash - https://unsplash.com/photos/mR_AxcbVivg"
              />
            }
            body={<h3>Lisbon</h3>}
            footer={<a href="">Read Article</a>}
          />
          <Card
            header={
              <img
                src="/images/card-photo-example-2.jpg"
                alt="Photo by Mert Kahveci on Unsplash - https://unsplash.com/photos/fD3hLQ28BtY"
              />
            }
            body={
              <div>
                <h3>Turkish Rivieria</h3>
                <p>A week itinerary in Bodrum, Turkey</p>
              </div>
            }
            footer={<a href="">Read Article</a>}
          />
        </div>
      </div>
      <div>
        <h2>Buttons</h2>
        <Button variant={'primary'} onClick={onClickHandler}>
          Primary Button
        </Button>
        <Button variant={'secondary'} onClick={onClickHandler}>
          Secondary Button
        </Button>
        <Button variant={'secondary'} onClick={onClickHandler} disabled={true}>
          Disabled Button
        </Button>
      </div>
      <div>
        <h2>Modal Demo</h2>
        <Button variant={'primary'} onClick={() => setShowModal(true)}>
          Click To See Modal
        </Button>
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
          <p>
            Modal Body Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Modal>
      </div>
      <div>
        <h2>Toast Demo</h2>
        <Button variant={'primary'} onClick={handleInfo} disabled={false}>
          Info Toast
        </Button>
        <Button variant={'primary'} onClick={handleWarning} disabled={false}>
          Warning Toast
        </Button>
        <Button variant={'primary'} onClick={handleSuccess} disabled={false}>
          Success Toast
        </Button>
        <Button variant={'primary'} onClick={handleError} disabled={false}>
          Error Toast
        </Button>
      </div>
    </div>
  );
};

export default Demo;
