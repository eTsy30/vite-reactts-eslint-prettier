/* eslint-disable react/jsx-no-undef */
import React, { ChangeEvent, FC, useState } from 'react';
import InputMask from 'react-input-mask';

import styles from './style.module.scss';
interface InputPhoneProps {
  placeholder: string;
  errors?: string;
  title: string;
  data: {
    value: string;
    onChange: (value: string) => void;
  };
}
export const PhoneInput: FC<InputPhoneProps> = ({ placeholder, data, errors, title }) => {
  const [phoneNumber, setPhoneNumber] = useState<string>(data.value || '');

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPhoneNumber = e.target.value;
    setPhoneNumber(newPhoneNumber);
    data.onChange(newPhoneNumber);
  };
  return (
    <div className={styles.inputContainer}>
      <p>{title}</p>

      <InputMask
        mask="+7 (999) 999-99-99"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder={placeholder}
        className={`${styles.inputComponent} `}
      />
      {errors && <span>{errors}</span>}
    </div>
  );
};
