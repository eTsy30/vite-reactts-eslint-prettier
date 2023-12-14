/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-undef */

import React, { FC, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';

import Trach from '../../Assets/Icon/Trach.svg?react';
import { setStep2 } from '../../redux/slices/setProfile';
import styles from './style.module.scss';
interface Step1Props {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

export const Step2: FC<Step1Props> = ({ currentStep, setCurrentStep }) => {
  const dispatch = useDispatch();

  const [inputValues, setInputValues] = useState<Record<string, string>>({});

  const onSubmit = (values: {
    advantages: string[];
    radio: number;
    checkbox: number[];
  }) => {
    const testValue = Object.entries(inputValues).map((field: any) => {
      const [id, text] = field;
      return text;
    });
    values.advantages = testValue;

    dispatch(setStep2(values));
    setCurrentStep(currentStep + 1);
  };

  const handleAddInput = () => {
    setInputValues({
      ...inputValues,
      [uuid()]: '',
    });
  };
  const mutators = {
    push: (args: any[], state: any, utils: any) => {
      utils.changeValue(state, args[0], (value: any[]) => [...(value || []), args[1]]);
    },
    pop: (args: any[], state: any, utils: any) => {
      utils.changeValue(state, args[0], (value: any[]) => value && value.slice(0, -1));
    },
  };
  const handleRemoveInput = (idRemove: string) => {
    const testValue = Object.entries(inputValues).filter((field: any) => {
      const [id] = field;
      return id !== idRemove;
    });
    setInputValues(Object.fromEntries(testValue));
  };
  const handleChange = ({ target }: any) => {
    setInputValues({
      ...inputValues,
      [target.id]: target.value,
    });
  };
  return (
    <div className={styles.step2Container}>
      <Form
        onSubmit={onSubmit}
        mutators={mutators}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={styles.formStyle}>
            <div className={styles.formWrapper}>
              <div className={styles.fieldsContainer}>
                <label className={styles.title}>Преимущества</label>
                {Object.entries(inputValues).map((todo) => {
                  const [id] = todo;
                  return (
                    <div className={styles.advantagesContainer}>
                      <input
                        className={styles.inputItem}
                        type="text"
                        id={id}
                        placeholder="Placeholder"
                        value={inputValues[id]}
                        onChange={handleChange}
                      />
                      <Trach
                        onClick={() => {
                          handleRemoveInput(id);
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              <button
                type="button"
                id="button add"
                className={styles.buttonAdd}
                onClick={handleAddInput}
              >
                +
              </button>
              <div className={styles.group}>
                <label className={styles.title}>Checkbox группа</label>

                <label className={styles.groupSbpTitle}>
                  <Field
                    name="checkbox"
                    component="input"
                    id="field-checkbox-group-option-1"
                    type="checkbox"
                    value="1"
                  />{' '}
                  1
                </label>
                <label className={styles.groupSbpTitle}>
                  <Field
                    name="checkbox"
                    component="input"
                    id="field-checkbox-group-option-2"
                    type="checkbox"
                    value="2"
                  />{' '}
                  2
                </label>
                <label className={styles.groupSbpTitle}>
                  <Field
                    name="checkbox"
                    component="input"
                    id="field-checkbox-group-option-3"
                    type="checkbox"
                    value="3"
                  />{' '}
                  3
                </label>
              </div>
              <div className={styles.group}>
                {' '}
                <label className={styles.title}>Radio группа</label>
                <label className={styles.groupSbpTitle}>
                  <Field
                    name="radio"
                    component="input"
                    id="field-radio-group-option-1"
                    type="radio"
                    value="1"
                  />{' '}
                  1
                </label>
                <label className={styles.groupSbpTitle}>
                  <Field
                    name="radio"
                    component="input"
                    id="field-radio-group-option-2"
                    type="radio"
                    value="2"
                  />{' '}
                  2
                </label>
                <label className={styles.groupSbpTitle}>
                  <Field
                    name="radio"
                    component="input"
                    id="field-radio-group-option-3"
                    type="radio"
                    value="3"
                  />{' '}
                  3
                </label>
              </div>
            </div>
            <div className={styles.buttonGroup}>
              <button
                type="button"
                id="button-back"
                onClick={() => setCurrentStep(currentStep - 1)}
                className={styles.buttonBack}
              >
                Назад
              </button>
              <button id="ID: button-next" type="submit" className={styles.buttonNext}>
                Далее
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
};
