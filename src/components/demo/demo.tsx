import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import styles from './demo.module.scss';

import TextInput from '../../ui-library/textInput/textInput';
import NumberInput from '../../ui-library/numberInput/numberInput';
import Select from '../../ui-library/select/select';
import CheckboxInput from '../../ui-library/checkboxInput/checkboxInput';
import Card from '../../ui-library/card/card';
import Button from '../../ui-library/button/button';
import Modal from '../../ui-library/modal/modal';
import PasswordInput from '../../ui-library/passwordInput/passwordInput';

const Demo: React.FunctionComponent = (): JSX.Element => {
  const [formValues, setFormValues] = useState({
    name: '',
    age: '',
    country: '',
    developer: false,
    employed: true,
    password: '',
  });

  const [showModal, setShowModal] = useState(false);

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    const val = type === 'checkbox' ? checked : value;
    setFormValues({ ...formValues, [name]: val });
  };

  const selectValues = ['canada', 'usa'];

  const onClickHandler = (): void => {
    alert('button clicked');
  };

  return (
    <div>
      <h1>UI Library Demo</h1>
      <h2>Form Components</h2>
      <div className={styles.section}>
        <div>
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
        <div>
          <h3>Example of a Select Input</h3>
          <Select
            label={'Select Country:'}
            name={'country'}
            onChange={onInputChange}
            options={selectValues}
            placeholder={'Select A Country'}
            required={true}
          />
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
      </div>
      <div className={styles.maxWidth}>
        <h3>Password Input</h3>
        <PasswordInput
          name={'password'}
          value={formValues.password}
          label={'Enter Your Password'}
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
          <FontAwesomeIcon icon={faShoppingCart} />
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
            <Button
              variant={'primary'}
              onClick={() => setShowModal(false)}
              size={'small'}
            >
              Close
            </Button>
          }
        >
          <p>
            Modal Body Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Modal>
      </div>
    </div>
  );
};

export default Demo;
