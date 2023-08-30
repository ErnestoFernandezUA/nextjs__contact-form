'use client'

import { ChangeEvent } from 'react';
import Image from "next/image";
import { Poppins } from "next/font/google";
import classNames from 'classnames';
import signed from '../../../assets/images/signed.icon.svg';
import noSigned from '../../../assets/images/noSigned.icon.svg';
import styles from './InputRadio.module.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['500'] });

export enum InputRadioType {
  checkbox = 'checkbox',
  radio = 'radio',
}

interface InputRadioProps {
  label: string;
  id: string;
  name: string;
  type: InputRadioType;
  onChange: (e: ChangeEvent<any>) => void;
  value: string;
  className?: string;

  selected?: string;

}

export const InputRadio: React.FC<InputRadioProps> = ({
  label,
  id,
  name,
  type,
  onChange,
  value,
  className,

  selected,
}) => {

  const isSelected = selected === value;

  if (type === InputRadioType.radio) {
    return (
      <div className={styles.radio}>
        <label htmlFor={id}>
          <input
            id={id}
            name={name}
            type={type}
            onChange={onChange}
            value={value}
            className={classNames(poppins.className,className)}
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
    <div className={styles.checkbox}
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
    </div>
  )
};
