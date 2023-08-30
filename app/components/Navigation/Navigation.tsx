'use client';
import Image from 'next/image';
import { NavigationItem } from '../NavigationItem/NavigationItem';
import { routesConfig } from './navigationConfig';
import styles from './Navigation.module.css';
import { useState } from 'react';
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
  className?: string | null;
  isShowMenu: boolean;
  toggleHandlerMenu: (e: React.MouseEvent<Element, MouseEvent>, forceValue?: boolean) => void;
}

export const Navigation:React.FC<NavigationProps> = ({
  className, isShowMenu, toggleHandlerMenu,
}) => {
  const [isRootShow, setIsRootShow] = useState<isVisible>(isVisible.hidden);

  const rootToggleHandler = (event: React.MouseEvent, forceValue? : isVisible) => {
    event.stopPropagation();

    typeof forceValue !== 'undefined' 
    ? setIsRootShow(forceValue) 
    : setIsRootShow(v => v === isVisible.show 
      ? isVisible.hidden 
      : isVisible.show);
  }
  
  return (
    <nav 
      className={classNames(styles.navigation, 
        { [styles.active]: isShowMenu })}
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
