import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Success from '../../../Assets/Icon/Success.svg?react';
import styles from './style.module.scss';
interface Props {
  setVisibleModal: (visible: boolean) => void;
}
export const SuccessChild: FC<Props> = ({ setVisibleModal }) => {
  const navigate = useNavigate();
  return (
    <section className={styles.container}>
      <h2>Форма успешно отправлена</h2>
      <div className={styles.pulsating}>
        <Success />
      </div>
      <button
        id="button-to-main"
        className={styles.button}
        onClick={() => {
          setVisibleModal(false);
          navigate('/');
        }}
      >
        На главную
      </button>
    </section>
  );
};
