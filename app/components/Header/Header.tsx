'use client'

import { useState } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { Inter } from 'next/font/google'
import classNames from 'classnames';
import styles from './Header.module.css';
import Image from 'next/image';
import { PopupMenu } from '../PopupMenu/PopupMenu';
import menu from './../../assets/images/menu.icon.svg';
import logoImage from './../../assets/images/menu.icon.svg';
import closeMenu from './../../assets/images/closeMenu.icon.svg';

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
          <a className={classNames(styles.logo, inter.className,
            {[styles.active]: isShow})}>
            Logo Here

            {/* <Image 
              src={logoImage} 
              alt="logo"
              className={styles.logoImage}
            /> */}
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
