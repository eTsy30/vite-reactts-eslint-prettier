/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC } from 'react';
import { Field, Form } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Input } from '../../Components/Input/Input';
import { Select } from '../../Components/select/Select';
import { setStep1 } from '../../redux/slices/setProfile';
import styles from './style.module.scss';
interface Step1Props {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}
export const Step1: FC<Step1Props> = ({ currentStep, setCurrentStep }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (values: {
    nickname: string;
    name: string;
    surname: string;
    sex: 'man' | 'woman';
  }) => {
    dispatch(setStep1(values));
    setCurrentStep(currentStep + 1);
  };
  return (
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        const errors: {
          nickname?: string;
          name?: string;
          surname?: string;
          sex?: string;
        } = {};
        if (!values.nickname) {
          errors.nickname = 'Required';
        } else if (!/^[a-zA-Z0-9]{1,30}$/.test(values.nickname)) {
          errors.nickname = 'Must maximum length 30 characters';
        }

        if (!values.name) {
          errors.name = 'Required';
        } else if (!/^[a-zA-Z]{1,50}$/.test(values.name)) {
          errors.name = 'Макс. 50 символов: только буквы ';
        }

        if (!values.surname) {
          errors.surname = 'Required';
        } else if (!/^[a-zA-Z]{1,50}$/.test(values.surname)) {
          errors.surname = 'Макс. 50 символов: только буквы ';
        }

        if (!values.sex) {
          errors.sex = 'Required';
        } else if (values.sex !== 'man' && values.sex !== 'woman') {
          errors.sex = 'Invalid gender';
        }

        return errors;
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={styles.formStyle}>
          <div className={styles.formWrapper}>
            <Field name="nickname">
              {({ input, meta }) => {
                return (
                  <Input
                    id="field-nickname"
                    title="Никнейм"
                    placeholder="Никнейм"
                    type={'text'}
                    errors={
                      (meta.error || meta.submitError) && meta.touched
                        ? meta.error || meta.submitError
                        : ''
                    }
                    {...input}
                  />
                );
              }}
            </Field>
            <Field name="name">
              {({ input, meta }) => {
                return (
                  <Input
                    id="field-name"
                    title={'Имя'}
                    placeholder="Имя"
                    type={'text'}
                    {...input}
                    errors={
                      (meta.error || meta.submitError) && meta.touched
                        ? meta.error || meta.submitError
                        : ''
                    }
                  />
                );
              }}
            </Field>
            <Field name="surname">
              {({ input, meta }) => {
                return (
                  <Input
                    id="field-sername"
                    title={'Фамилия'}
                    placeholder="Фамилия"
                    type={'text'}
                    {...input}
                    errors={
                      (meta.error || meta.submitError) && meta.touched
                        ? meta.error || meta.submitError
                        : ''
                    }
                  />
                );
              }}
            </Field>

            <Field name="sex">
              {({ input }) => {
                return <Select {...input} />;
              }}
            </Field>
          </div>
          <div className={styles.buttonGroup}>
            <button
              type="button"
              id="button-back"
              onClick={() => navigate(-1)}
              className={styles.buttonBack}
            >
              Назад
            </button>
            <button id="ID: button-next" className={styles.buttonNext}>
              Далее
            </button>
          </div>
        </form>
      )}
    />
  );
};
