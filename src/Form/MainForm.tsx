import { Field, Form } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Input } from '../Components/Input/Input';
import { PhoneInput } from '../Components/PhoneInput/PhoneInput';
import { setPhoneEmail } from '../redux/slices/setProfile';
import styles from './style.module.scss';

export const MainForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (values: { phone: string; email: string }) => {
    dispatch(setPhoneEmail(values));
    navigate('/registration');
  };

  return (
    <section className={styles.mainFormContainer}>
      <Form
        onSubmit={onSubmit}
        validate={(values) => {
          const errors: { phone?: string; email?: string } = {};
          if (!values.phone) {
            errors.phone = 'Required';
          } else if (!/^(\+7 \(\d{3}\) \d{3}-\d{2}-\d{2})$/.test(values.phone)) {
            errors.phone = 'Invalid phone number';
          }

          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
            errors.email = 'Invalid email format';
          }

          return errors;
        }}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className={styles.formWrapper}>
                <Field name="phone">
                  {({ input, meta }) => {
                    return (
                      <PhoneInput
                        placeholder={'+7 999 999-99-99'}
                        title={'Номер телефона'}
                        data={input}
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
                <Field name="email">
                  {({ input, meta }) => {
                    return (
                      <Input
                        id={'email'}
                        title={'Email'}
                        placeholder="webstudio.fractal@example.com"
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
              </div>
              <div>
                <button id="button-start" type="submit" className={styles.buttonForm}>
                  Начать
                </button>
              </div>
            </form>
          );
        }}
      />
    </section>
  );
};
