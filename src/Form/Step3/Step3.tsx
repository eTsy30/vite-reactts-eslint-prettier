/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent, FC, useState } from 'react';
import { Field, Form } from 'react-final-form';
interface Props {
  setVisibleModal: (visible: boolean) => void;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { fakePost, setStep3 } from '../../redux/slices/setProfile';
import styles from './style.module.scss';
export const Step3: FC<Props> = ({ setVisibleModal, currentStep, setCurrentStep }) => {
  const [charCount, setCharCount] = useState<number>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const countCharacters = (text: string) => {
    const charactersWithoutSpaces = text.replace(/\s/g, '');

    setCharCount(charactersWithoutSpaces.length); // Устанавливаем значение символов без пробелов
  };
  // const data = useSelector((state) => state);
  // console.log(data);

  const onSubmit = (values: { about: string }) => {
    dispatch(setStep3(values));
    // dispatch(fakePost());
    setVisibleModal(true);
  };

  return (
    <>
      <Form
        onSubmit={onSubmit}
        validate={(values) => {
          const errors: { about?: string } = {};
          if (!values.about) {
            errors.about = 'Required';
          } else if (values.about.replace(/\s/g, '').length > 200) {
            errors.about = 'Must be 200 characters or less';
          }

          return errors;
        }}
        render={({ handleSubmit, values, form }) => (
          <form onSubmit={handleSubmit} className={styles.formStyle}>
            <div className={styles.groupWrapper}>
              <label className={styles.title}>Notes</label>
              <Field
                id="field-about"
                name="about"
                component="textarea"
                className={styles.textarea}
                placeholder="Placeholder"
                rows="4"
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                  countCharacters(e.target.value);
                  form.change('about', e.target.value);
                }}
              />
              <p className={styles.tip}>{charCount ? charCount : 0}/200</p>
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
    </>
  );
};
