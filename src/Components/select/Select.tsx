/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, useState } from 'react';

import Arrow from '../../Assets/Icon/Chevron.svg?react';
import styles from './style.module.scss';
export interface InputProps {
  type?: string;
  name: string;
  errors?: string;
  onChange: any;
}
export const Select: FC<InputProps> = ({ name, ...input }) => {
  const [value, setValue] = useState<string>('Не выбрано');
  const [showOptions, setShowOptions] = useState<boolean>(false);

  return (
    <div>
      <label className={styles.genderLabel}>Пол</label>
      <div className={styles.containerWithIcon}>
        <input
          {...input}
          id="field-sex"
          name={name}
          value={value}
          type="text"
          className={styles.inputSelect}
          placeholder="Не выбрано"
          onClick={() => setShowOptions(!showOptions)}
        />
        <Arrow
          className={showOptions ? styles.arrowRotate : ''}
          onClick={() => setShowOptions(!showOptions)}
        />
      </div>

      {showOptions && (
        <div className={styles.optionsStyle}>
          <p
            id="field-sex-option-man"
            onClick={() => {
              setValue('мужской');
              setShowOptions(!showOptions);
              input.onChange('man');
            }}
          >
            мужской
          </p>
          <p
            id="field-sex-option-woman"
            onClick={() => {
              setValue('женский');
              setShowOptions(!showOptions);
              input.onChange('woman');
            }}
          >
            женский
          </p>
        </div>
      )}
    </div>
  );
};
