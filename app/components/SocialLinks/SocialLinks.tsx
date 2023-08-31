import Image from "next/image";
import { contactData } from "./../../contact/contactData";
import styles from './SocialLinks.module.css';

export const SocialLinks = () => {
  return contactData.map(el => (
  <a
    key={el.label}  
    href={el.href} 
    className={styles.link}
    target="_blank"
  >
    <Image src={el.icon} alt={el.label} />
    
    <p>{el.label}</p>
  </a>
  ));
};
