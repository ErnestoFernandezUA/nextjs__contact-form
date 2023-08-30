'use client'

import { ChangeEvent, useState } from 'react';
import { Poppins } from "next/font/google";
import classNames from 'classnames';
import styles from './InputText.module.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['500'] });

export enum InputTextType {
  text = 'text',
  email = 'email',
  password = 'password',
  textarea = 'textarea',
}

interface InputTextProps {
  label: string;
  id: string;
  name: string;
  type: InputTextType;
  onChange: (e: ChangeEvent<any>) => void;
  value: string;
  className?: string;
  placeholder?: string;
  rows?: number;

  error?: string,
  touched?: boolean,
  mask?: (value: string) => string;
  unMask?: (value: string) => string;
}

export const InputText: React.FC<InputTextProps> = ({
  label,
  id,
  name,
  type,
  onChange: onChangeProps,
  value: valueProps,
  className,
  placeholder,
  rows = 1, 

  error,
  touched,

  mask,
  unMask,
}) => {
  const isValue = !!valueProps;

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

  if (type === InputTextType.textarea) {
    return (
      <div className={classNames(styles.textarea,
      { [styles.withValue]: isValue })}>
        <label htmlFor={id}>{label}</label>

        <textarea
          id={id}
          name={name}
          onChange={onChange}
          value={value}
          className={poppins.className}
          placeholder={placeholder}
          rows={rows}
        />

        {error && touched ? <div className={styles.error}>{error}</div> : null}
      </div>
    );
  }

  return (
    <div className={classNames(styles.text,
      { [styles.withValue]: isValue })}
    >
      <label 
        htmlFor={id}
        className={poppins.className}
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        className={classNames(poppins.className,className)}
      />

      {error && touched ? (
        <div className={styles.error}>{error}</div>
      ) : null}
    </div>
  )
};
