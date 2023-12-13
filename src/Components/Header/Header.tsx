import { FC } from 'react';
import { Link } from 'react-router-dom';

import FolderIcon from '../../Assets/Icon/Folder.svg?react';
import { getFirstLetters } from '../../Helpers/getFirstLetters';
import styles from './style.module.scss';
interface HeaderProp {
  name: string;
  linksSocialMedia?: SocialMedia[];
}

interface SocialMedia {
  title: string;
  link: string;
}
export const Header: FC<HeaderProp> = ({ name, linksSocialMedia }) => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerAvatar}>{getFirstLetters(name)}</div>
      <div className={styles.headerInformation}>
        <h3>{name}</h3>

        <div className={styles.linkContainer}>
          {linksSocialMedia &&
            linksSocialMedia.map((link: SocialMedia, index: number) => {
              return (
                <div className={styles.link} key={index}>
                  <FolderIcon />
                  <a href={link.link}>{link.title}</a>
                </div>
              );
            })}
        </div>
      </div>
    </header>
  );
};
