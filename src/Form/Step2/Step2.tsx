/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-undef */

import React, { FC, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

import Trach from '../../Assets/Icon/Trach.svg?react';
import { setStep2 } from '../../redux/slices/setProfile';
import styles from './style.module.scss';
interface Step1Props {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}
interface IState {
  id: string;
}
interface ITodo {
  id: string;
  text: string;
}
export const Step2: FC<Step1Props> = ({ currentStep, setCurrentStep }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    console.log(testValue, 'fff');

    // dispatch(setStep2(values));
    setCurrentStep(currentStep + 1);
  };
  const [fields, setFields] = useState<IState[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleAddInput = (target: any) => {
    console.log('######', todos);
    const test = { [uuid()]: '+' };
    console.log(test, 'test');

    setInputValues({
      ...inputValues,
      [uuid()]: '',
    });
    console.log(inputValues, 'inputValues');

    // if (!inputValue) return;
    // setTodos([...todos, { id: uuid(), text: inputValue }]);
    // setInputValue('');
    // setFields([...fields, { id: uuid() }]);
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
    // values.inputs = values.inputs.filter((value: any) => value !== id);
    // console.log(values.inputs);
    // const newArray = fields.filter((field: any) => field.id !== id);
    // setFields(newArray);
    // console.log(newArray, values);
    // setInputValues(Object.entries(inputValues).filter((field: any) => field.id !== id));
    const testValue = Object.entries(inputValues).filter((field: any) => {
      const [id, text] = field;
      return id !== idRemove;
    });
    setInputValues(Object.fromEntries(testValue));

    // setTodos(inputValues.filter((field: any) => field.id !== id));
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
        render={({ handleSubmit, values, form }) => (
          <form onSubmit={handleSubmit} className={styles.formStyle}>
            <div className={styles.formWrapper}>
              {/*
                  <div className={styles.fieldsContainer}>
                    <label className={styles.title}>Преимущества</label>
                    {todos.map((field: any, index: number) => (
                      <Field key={index} name={`inputs[${index}]`}>
                        {({ input }) => (
                          <div key={field.id} className={styles.advantagesContainer}>
                            <input
                              id={`field-advatages-${index + 1}`}
                              {...input}
                              type="text"
                              className={styles.inputItem}
                              placeholder="Placeholder"
                            />
                            <Trach
                              id={`button-remove-${index + 1}`}
                              onClick={() => {
                                handleRemoveInput(field.text, values);
                              }}
                            />
                          </div>
                        )}
                      </Field>
                    ))}
                  </div>
                )}
              </FieldArray> */}
              <div className={styles.fieldsContainer}>
                <label className={styles.title}>Преимущества</label>
                {Object.entries(inputValues).map((todo) => {
                  const [id, text] = todo;

                  console.log(id, 'url');

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
