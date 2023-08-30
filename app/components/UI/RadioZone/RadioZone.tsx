import { ChangeEvent } from 'react';
import { InputRadio, InputRadioType } from '../InputRadio/InputRadio';
import { Poppins } from 'next/font/google';
import styles from './RadioZone.module.css';
import classNames from 'classnames';

const poppins = Poppins({ subsets: ['latin'], weight: ['500'] });
interface RadioZoneProps {
  data: {label: string, value: string}[];
  value: string;
  onChange: any;
  title?: string;
  name: string;
  error?: string,
  touched?: boolean,
}

export const RadioZone: React.FC<RadioZoneProps> = ({ 
  onChange, 
  value: selectedValue, 
  data, 
  title, 
  name,
  error,
  touched,
}) => {
  const isValue = !!selectedValue;

  return (
    <div className={styles.radioZone}>
      <h4 className={classNames(poppins.className, 
        styles.title,
        { [styles.withValue]: isValue })}
      >
          {title}
      </h4>

      <div className={styles.radioZoneContainer}>
        {data.map(v => (
          <InputRadio
            key={v.value} 
            id={v.value} 
            label={v.label} 
            name={name} 
            type={InputRadioType.radio} 
            onChange={onChange} 
            value={v.value}
            selected={selectedValue}            
          />))}
      </div>

      {error && touched ? (
        <div className={styles.error}>{error}</div>
      ) : null}
    </div>
  );
};