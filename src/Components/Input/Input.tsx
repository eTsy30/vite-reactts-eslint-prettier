import React, { ChangeEvent, FC } from 'react';

import styles from './style.module.scss';
export interface InputProps {
  placeholder: string;
  type?: string;
  name: string;
  value: string;
  errors?: string;
  title: string;
  id: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({
  placeholder,
  id,
  type,
  name,
  value,
  onChange,
  errors,
  title,
}) => {
  return (
    <div className={styles.inputContainer}>
      <p>{title}</p>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        className={styles.inputComponent}
        value={value}
        onChange={onChange}
      />
      {errors && <span>{errors}</span>}
    </div>
  );
};
