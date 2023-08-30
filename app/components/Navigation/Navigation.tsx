'use client';
import Image from 'next/image';
import { NavigationItem } from '../NavigationItem/NavigationItem';
import { routesConfig } from './navigationConfig';
import styles from './Navigation.module.css';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import userLogo from './../../assets/images/user.icon.svg';
import userInverseLogo from './../../assets/images/userInverse.icon.svg';
import basketLogo from './../../assets/images/basket.icon.svg';
import basketInverseLogo from './../../assets/images/basketInverse.icon.svg';

export enum isVisible {
  show = 'show',
  hidden = 'hidden',
}

interface NavigationProps {
  className?: string;
  isShowMenu: boolean;
  toggleHandlerMenu: (e: React.MouseEvent<Element, MouseEvent>, forceValue?: boolean) => void;
}

export const Navigation:React.FC<NavigationProps> = ({
  className = '', isShowMenu, toggleHandlerMenu,
}) => {
  const navRef = useRef<HTMLDivElement>(null);
  const [isRootShow, setIsRootShow] = useState<isVisible>(isVisible.hidden);

  const rootToggleHandler = (event: MouseEvent | React.MouseEvent<Element, MouseEvent>, forceValue? : isVisible) => {
    event.stopPropagation();

    typeof forceValue !== 'undefined' 
    ? setIsRootShow(forceValue) 
    : setIsRootShow(v => v === isVisible.show 
      ? isVisible.hidden 
      : isVisible.show);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent):void => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        rootToggleHandler(event as MouseEvent, isVisible.hidden);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); 
  
  return (
    <nav
      ref={navRef} 
      className={classNames(styles.navigation, 
        { [styles.active]: isShowMenu },
        className)}
    >
      <div className={classNames(styles.navContainer)}>
        <NavigationItem 
          {...routesConfig.home} 
          rootToggleHandler={rootToggleHandler}
          toggleHandler={rootToggleHandler} 
          isShowMenu={isRootShow}
          toggleHandlerMenu={toggleHandlerMenu}
        />

        <NavigationItem 
          {...routesConfig.features} 
          rootToggleHandler={rootToggleHandler} 
          toggleHandler={rootToggleHandler} 
          isShowMenu={isRootShow}
          toggleHandlerMenu={toggleHandlerMenu}
        />

        <NavigationItem 
          {...routesConfig.blog} 
          rootToggleHandler={rootToggleHandler} 
          toggleHandler={rootToggleHandler} 
          isShowMenu={isRootShow}
          toggleHandlerMenu={toggleHandlerMenu}
        />

        <NavigationItem 
          {...routesConfig.about} 
          rootToggleHandler={rootToggleHandler} 
          toggleHandler={rootToggleHandler} 
          isShowMenu={isRootShow}
          toggleHandlerMenu={toggleHandlerMenu}
        />

        <NavigationItem 
          {...routesConfig.contact} 
          rootToggleHandler={rootToggleHandler} 
          toggleHandler={rootToggleHandler} 
          isShowMenu={isRootShow}
          toggleHandlerMenu={toggleHandlerMenu}
        />
      </div>

      <div className={styles.icons}>
        <NavigationItem 
          {...routesConfig.user} 
          rootToggleHandler={rootToggleHandler} 
          toggleHandler={rootToggleHandler} 
          isShowMenu={isRootShow}
          toggleHandlerMenu={toggleHandlerMenu}
        >
          <Image
            src={isShowMenu ? userInverseLogo : userLogo}
            alt="userLogo"
          />
        </NavigationItem>

        <NavigationItem 
          {...routesConfig.basket} 
          rootToggleHandler={rootToggleHandler} 
          toggleHandler={rootToggleHandler} 
          isShowMenu={isRootShow}
          toggleHandlerMenu={toggleHandlerMenu}
        >
          <Image
            src={isShowMenu ? basketInverseLogo : basketLogo}
            alt="userLogo"
          />
        </NavigationItem>
      </div>
    </nav>
  )
};
