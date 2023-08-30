'use client'

import { useState } from 'react';
import { usePathname } from 'next/navigation'
import { Roboto } from 'next/font/google';
import Link from 'next/link'
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import classNames from 'classnames';
import styles from './NavigationItem.module.css';
import { isVisible } from '../Navigation/Navigation';

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '700']
});

type NavLink = {
  label: string;
  path: string;
  subLinks?: NavLink[];
}

interface NavigationItemProps extends NavLink {
  subLinks?: NavLink[];
  children?: React.ReactNode;
  rootToggleHandler: (e: React.MouseEvent, value?: isVisible) => void;
  toggleHandler?: (e: React.MouseEvent, value?: isVisible) => void;
  isShowMenu?: isVisible;
  // isMobile?: boolean;
  toggleHandlerMenu: (e: React.MouseEvent<Element, MouseEvent>, forceValue?: boolean) => void; 
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  label,
  path,
  subLinks = [],
  children,
  rootToggleHandler,
  toggleHandler: toggleHandlerParent,
  isShowMenu: isShowParent,
  toggleHandlerMenu,
}) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  console.log(pathname, isActive, path)
  const isRoot = typeof toggleHandlerParent !== 'undefined';
  
  const [isShow, setIsShow] = useState<isVisible>(isVisible.hidden);
  const toggleHandler = (event: React.MouseEvent, forceValue? : isVisible) => {
    typeof forceValue !== 'undefined' 
    ? setIsShow(forceValue) 
    : setIsShow(v => v === isVisible.show ? isVisible.hidden : isVisible.show);
  }

  // for root 
  const toggleHandlerLabelSubLinks = (e: React.MouseEvent) => {
    console.log('toggleHandlerLabelSubLinks', label, typeof toggleHandlerParent !== 'undefined')

    isRoot  ? toggleHandlerParent(e) : toggleHandler(e)
  };

  const toggleHandlerLink = (e: React.MouseEvent) => {
    rootToggleHandler(e, isVisible.hidden)
    toggleHandlerMenu(e, false);
  }

  const isShowSubLinks = isShowParent 
    ? isShowParent === isVisible.show 
    : isShow === isVisible.show;

  // if link is label of subLinks
  if (subLinks.length) {
    return (
      <div className={classNames(styles.navigationItemContainer)}>
        <div className={styles.navigationItem}>
          <button 
            onClick={toggleHandlerLabelSubLinks}
            className={classNames(
              roboto.className,
            { [styles.active] : isActive })}
          >
            {children || label}
            
            <div className={styles.arrow}>
              {(isShowParent 
                ? isShowParent === isVisible.show 
                : isShow === isVisible.show)
                ? <IoChevronUpOutline/>
                : <IoChevronDownOutline />}
            </div>
          </button>

          {isShowSubLinks && (
            <div className={isRoot ? styles.rootSubLinks : styles.subLinks}>
              {subLinks.map(el => 
                <NavigationItem 
                  key={el.label} 
                  label={el.label} 
                  path={el.path}
                  subLinks={el.subLinks}
                  rootToggleHandler={rootToggleHandler}
                  toggleHandlerMenu={toggleHandlerMenu}
                />
              )}
            </div>)}
        </div>
      </div>
    );
  }
  
  // if casual link to page
  return (
    <div className={classNames(styles.navigationItemContainer)}>
      <Link
        onClick={toggleHandlerLink} 
        href={path}
        className={classNames(
          roboto.className,
          styles.navigationItem, 
          { [styles.active] : isActive })}
      >
        {children || label}
      </Link>
    </div>
  )
};
