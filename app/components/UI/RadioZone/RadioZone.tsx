import styles from './RadioZone.module.css';
import Image from "next/image";
import signed from '../../../assets/images/signed.icon.svg';
import noSigned from '../../../assets/images/noSigned.icon.svg';
import { Input, InputType } from '../Input/Input';
import { ChangeEvent } from 'react';



interface RadioZoneProps {
  data: {label: string, value: string}[];
  selected: string;
  onChange: any;
  title?: string;
}

export const RadioZone: React.FC<RadioZoneProps> = ({ onChange, selected, data, title }) => {
  return (
    <div className={styles.radioZone}>
      <h4 className={styles.title}>{title}</h4>

      <div className={styles.radioZoneContainer}>
        {data.map(v => (
          <Input
            key={v.value} 
            id="subject" 
            label={v.label} 
            name="subject" 
            type={InputType.radio} 
            onChange={onChange} 
            value={v.value}
            isSelected={v.value === selected}            
          />))}
      </div>
    </div>
  );
};