import Link from 'next/link';
import { routesConfig } from '../Navigation/navigationConfig';
import { Subscribe } from '../Subscribe/Subscribe';
import { SocialLinks } from '../SocialLinks/SocialLinks';
import { Poppins } from 'next/font/google';
import { LabelHover } from "../LabelHover/LabelHover";
import styles from './Footer.module.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['500'] });

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

          <LabelHover font={poppins}>
            <Link href={routesConfig.about.path}>
              {routesConfig.about.label}
            </Link>
          </LabelHover>
          <LabelHover font={poppins}>
            <Link href={routesConfig.contact.path}>
              {routesConfig.contact.label}
            </Link>
          </LabelHover>
          <LabelHover font={poppins}>
            <Link href={routesConfig.blog.path}>
              {routesConfig.blog.label}
            </Link>
          </LabelHover>
           
        </div>

        <div className={styles.footerBlock}>
          <h4>Legal</h4>

          <LabelHover font={poppins}>
            <Link href={routesConfig.privacyPolicy.path}>
              {routesConfig.privacyPolicy.label}
            </Link> 
          </LabelHover>
          <LabelHover font={poppins}>
            <Link href={routesConfig.termsServices.path}>
              {routesConfig.termsServices.label}
            </Link>
          </LabelHover>
          <LabelHover font={poppins}>
            <Link href={routesConfig.termsOfUse.path}>
              {routesConfig.termsOfUse.label}
            </Link>
          </LabelHover>
          <LabelHover font={poppins}>
            <Link href={routesConfig.refundPolicy.path}>
              {routesConfig.refundPolicy.label}
            </Link>
          </LabelHover>
        </div>

        <div className={styles.footerBlock}>
          <h4>Quick Links</h4>

          <LabelHover font={poppins}>
            <Link href={routesConfig.techlabzKeybox.path}>
              {routesConfig.techlabzKeybox.label}
            </Link> 
          </LabelHover>
          <LabelHover font={poppins}>
            <Link href={routesConfig.downloads.path}>
              {routesConfig.downloads.label}
            </Link>
          </LabelHover>
          <LabelHover font={poppins}>
            <Link href={routesConfig.forum.path}>
              {routesConfig.forum.label}
            </Link>
          </LabelHover>
        </div>

        <div className={styles.footerBlock}>
          <Subscribe />
        </div>
      </div>

    </div>
  )
};
