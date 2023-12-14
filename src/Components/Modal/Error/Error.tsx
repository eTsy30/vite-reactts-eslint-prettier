import { FC } from 'react';
interface Props {
  setVisibleModal: (visible: boolean) => void;
}
import ErrorIcon from '../../../Assets/Icon/Error.svg?react';
import Exit from '../../../Assets/Icon/Exit.svg?react';
import style from './style.module.scss';
export const ErrorChild: FC<Props> = ({ setVisibleModal }) => {
  return (
    <section className={style.container}>
      <div className={style.titleContainer}>
        <h2>Oшибка</h2>
        <Exit
          onClick={() => {
            setVisibleModal(false);
          }}
        />
      </div>

      <div className={style.pulsating}>
        <ErrorIcon />
      </div>
      <button
        id="button-close"
        className={style.button}
        onClick={() => {
          setVisibleModal(false);
        }}
      >
        Закрыть
      </button>
    </section>
  );
};
