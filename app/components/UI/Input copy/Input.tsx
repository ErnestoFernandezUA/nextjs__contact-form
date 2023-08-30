'use client'

import { ChangeEvent, useState } from 'react';
import Image from "next/image";
import signed from '../../../assets/images/signed.icon.svg';
import noSigned from '../../../assets/images/noSigned.icon.svg';
import styles from './Input.module.css';
import { Poppins } from "next/font/google";
import classNames from 'classnames';

const poppins = Poppins({ subsets: ['latin'], weight: ['500'] });

export enum InputType {
  text = 'text',
  email = 'email',
  password = 'password',
  checkbox = 'checkbox',
  radio = 'radio',
  textarea = 'textarea',
}

interface NavigationItemProps {
  label: string;
  id: string;
  name: string;
  type: InputType;
  onChange: (e: ChangeEvent<any>) => void;
  value: string;
  className?: string;
  placeholder?: string;
  rows?: number;

  selected?: string;
  error?: string,
  touched?: boolean,
  mask?: (value: string) => string;
  unMask?: (value: string) => string;
}

export const Input: React.FC<NavigationItemProps> = ({
  label,
  id,
  name,
  type,
  onChange: onChangeProps,
  value: valueProps,
  className,
  placeholder,
  rows = 1, 

  selected,
  error,
  touched,

  mask,
  unMask,
}) => {
  const isValue = !!valueProps;
  const isSelected = selected === valueProps;

  const onChange = (e: ChangeEvent<any>) => unMask 
    ? onChangeProps({
        ...e,
        target: {
          ...e.target,
          value: unMask(e.target.value),
          name: name,
        },
      }) 
    : onChangeProps(e);
  
  const value = typeof mask !== 'undefined' ? mask(valueProps) : valueProps;

  if (type === InputType.textarea) {
    return (
      <div className={classNames(styles.textarea,
      { [styles.withValue]: isValue })}>
        <label htmlFor={id}>{label}</label>
        <br/>

        <textarea
          id={id}
          name={name}
          onChange={onChange}
          value={value}
          className={poppins.className}
          placeholder={placeholder}
          rows={rows}
        />
        {error && touched ? <div>{error}</div> : null}
      </div>
    );
  }

  if (type === InputType.radio) {
    return (
      <div className={classNames(styles.radio,
        { [styles.withValue]: isValue })}>
        <label>
          <input
            id={id}
            name={name}
            type={type}
            onChange={onChange}
            value={value}
            className={className}
          />
    
          <Image 
            src={isSelected ? signed : noSigned} 
            alt={isSelected ? "signed-icon" : "no-signed-icon"} 
          />
  
          {label}
        </label>
      </div>
    );
  }

  return (
    <div className={classNames(styles.text,
      { [styles.withValue]: isValue })}
    >
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        className={className}
      />
      {error && touched ? (
        <div className={styles.error}>{error}</div>
      ) : null}
    </div>
  )
};
