import classNames from 'classnames';
import { Roboto } from 'next/font/google';
import { NextFont } from 'next/dist/compiled/@next/font';
import styles from './LabelHover.module.css';

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '700']
});

interface LabelHoverProps {
  label?: string;
  children?: React.ReactNode;
  font?: NextFont;
  fontWeight?: 500 | 600 | 700;
};

export const LabelHover:React.FC<LabelHoverProps> = ({ 
  label, 
  children, 
  font = roboto,
  fontWeight = 700,
}) => {
  return (
    <div className={classNames(font.className, styles.label)}>
      <div style={{ fontWeight }}>{children || label}</div>
      <div>{children || label}</div>
      <div style={{ fontWeight }}>{children || label}</div>
    </div>
  );
};