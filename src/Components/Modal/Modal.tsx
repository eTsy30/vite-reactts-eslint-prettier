/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, ReactNode } from 'react';
interface Props {
  setVisibleModal: (visible: boolean) => void;
  children: ReactNode;
}
import styles from './style.module.scss';
export const Modal: FC<Props> = ({ setVisibleModal, children }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    setVisibleModal(false);
  };
  return (
    <div onClick={handleClick} className={styles.container}>
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};
