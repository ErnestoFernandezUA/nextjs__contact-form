import styles from './Footer.module.css';
import Image from "next/image";
import phone from '../../assets/images/phone.icon.svg';
import email from '../../assets/images/email.icon.svg';
import location from '../../assets/images/location.icon.svg';
import { contactData } from "./../../contact/contactData";
import Link from 'next/link';
import { routesConfig } from '../Navigation/navigationConfig';
import { Subscribe } from '../Subscribe/Subscribe';
import { SocialLinks } from '../SocialLinks/SocialLinks';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <h2>Logo Here</h2>

      <div className={styles.footerContainer}>
        <div className={styles.footerBlock}>
          <h4>Reach Us</h4>

          <SocialLinks />
        </div>

        <div className={styles.footerBlock}>
          <h4>Company</h4>

          <Link href={routesConfig.about.path}>
            {routesConfig.about.label}
          </Link> 
          <Link href={routesConfig.contact.path}>
            {routesConfig.contact.label}
          </Link>
          <Link href={routesConfig.blog.path}>{routesConfig.blog.label}</Link>
        </div>

        <div className={styles.footerBlock}>
          <h4>Legal</h4>

          <Link href={routesConfig.privacyPolicy.path}>{routesConfig.privacyPolicy.label}</Link> 
          <Link href={routesConfig.termsServices.path}>{routesConfig.termsServices.label}</Link>
          <Link href={routesConfig.termsOfUse.path}>{routesConfig.termsOfUse.label}</Link>
          <Link href={routesConfig.refundPolicy.path}>{routesConfig.refundPolicy.label}</Link>
        </div>

        <div className={styles.footerBlock}>
          <h4>Quick Links</h4>

          <Link href={routesConfig.techlabzKeybox.path}>{routesConfig.techlabzKeybox.label}</Link> 
          <Link href={routesConfig.downloads.path}>{routesConfig.downloads.label}</Link>
          <Link href={routesConfig.forum.path}>{routesConfig.forum.label}</Link>
        </div>

        <Subscribe />
      </div>

    </div>
  )
};
