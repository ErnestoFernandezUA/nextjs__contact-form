import Image from "next/image";
import { contactData } from "./../../contact/contactData";
import styles from './SocialLinks.module.css';
import { LabelHover } from "../LabelHover/LabelHover";

export const SocialLinks = () => {
  return contactData.map(el => (
    <div key={el.label} >
      <a
        href={el.href} 
        className={styles.link}
        target="_blank"
      >
        <Image src={el.icon} alt={el.label} />
      </a>

      <a
        href={el.href} 
        className={styles.link}
        target="_blank"
      >
        <LabelHover><p>{el.label}</p></LabelHover>
      </a>
    </div>
  ));
};
