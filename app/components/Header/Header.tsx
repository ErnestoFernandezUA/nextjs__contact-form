'use client'

import { useState } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google'
import classNames from 'classnames';
import { Navigation } from '../Navigation/Navigation';
import closeMenu from './../../assets/images/closeMenu.icon.svg';
import menu from './../../assets/images/menu.icon.svg';
import styles from './Header.module.css';
import { routesConfig } from '../Navigation/navigationConfig';

const inter = Inter({ subsets: ['latin'] });

export const Header = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const toggleHandlerMenu = (e: React.MouseEvent<Element, MouseEvent>, forceValueMenu?: boolean) => {
    if (typeof forceValueMenu !== 'undefined') {
      setIsShow(forceValueMenu);
      return;
    }

    setIsShow(value => !value);
  }

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={classNames(styles.headerBody)}>
          <a
            href="/"
            className={classNames(styles.logo, inter.className,
            {[styles.active]: isShow})}>
            Logo Here
          </a>
          
          <Image 
            src={isShow ? closeMenu : menu} 
            alt="menu-button"
            onClick={toggleHandlerMenu}
            className={styles.menuButton}
          />

          <Navigation 
            isShowMenu={isShow}
            toggleHandlerMenu={toggleHandlerMenu}
          />
        </div>
      </div>
    </div>
  )
};
