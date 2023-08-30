'use client'

import Image from "next/image";
import phoneIcon from '../assets/images/phone.icon.svg';
import emailIcon from '../assets/images/email.icon.svg';
import locationIcon from '../assets/images/location.icon.svg';
import { contactData } from "./contactData";
import styles from './page.module.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import signed from '../assets/images/signed.icon.svg';
import ellipse from '../assets/images/ellipse.svg';
import paperPlane from '../assets/images/paper-plane.png';
import classNames from "classnames";
import { Poppins } from "next/font/google";
import { InputText, InputTextType } from "../components/UI/InputText/InputText";
import { Theme, TwitterIcon } from "../components/UI/Icons/TwitterIcon";
import { DiscordIcon } from "../components/UI/Icons/DiscordIcon";
import { InstagramIcon } from "../components/UI/Icons/InstagramIcon";
import { RadioZone } from "../components/UI/RadioZone/RadioZone";
import { maskPhone, unMaskPhone } from "../utils/maskPhoneNumber";
import { socialLinks } from "../constants/socialLinks";

const mockDataRadio = [
  {label: 'General Inquiry', value: '1'},
  {label: 'General Inquiry', value: '2'},
  {label: 'General Inquiry', value: '3'},
  {label: 'General Inquiry', value: '4'},
];

const propsMask = {
  withBrackets: false, 
  positionSpaces: [1, 4, 8],
  countDigits: 11,
};

const poppins = Poppins({ subsets: ['latin'], weight: ['500'] });

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  phone: Yup.number()
    .integer()
    .moreThan(100000000000, 'no correct number')
    .lessThan(999999999999, 'no correct number')
    .required('Required'),
  subject: Yup.string()
    .required('Subject value required'),
  message: Yup.string()
    .required('Required'),
});

export default function Contact() {

  return (
    <section className={styles.contactUs}>
      <h1 className={styles.title}>Contact Us</h1>
      <h3 className={styles.subtitle}>
        Any question or remarks? 
        <br className={styles.brSubtitle}/>
        Just write us a message!
      </h3>

      <Formik
        initialValues={{
          firstName: '',
          lastName: 'Doe',
          email: '',
          phone: '10123456789',
          subject: '',
          message: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ values, errors, touched, handleChange }) => (
          <Form className={styles.form}>
            <fieldset className={styles.blackSide}>
              <div>
                <h2>Contact Information</h2>
                <h3>Say something to start a live chat!</h3>
              </div>
              
              <div className={styles.links}>
                {contactData.map(el => (
                  <a href={el.href} key={el.label}>
                    <Image src={el.icon} alt={el.label} />
                    {el.label}
                  </a>
                ))}
              </div>

              {/* <Image src={ellipse} alt="ellipse" className={styles.ellipse} /> */}

              <div className={styles.socialIcons}>
                <a href={socialLinks.twitter}><TwitterIcon theme={Theme.dark} /></a>
                <a href={socialLinks.discord}><DiscordIcon theme={Theme.dark} /></a>
                <a href={socialLinks.instagram}><InstagramIcon theme={Theme.dark} /></a>
              </div>
            </fieldset>

            <fieldset className={styles.whiteSide}>
              <InputText
                label="First Name"
                id="firstName"
                name="firstName"
                type={InputTextType.text}
                onChange={handleChange}
                value={values.firstName}
                error={errors.firstName}
                touched={touched.firstName} 
              />

              <InputText
                label="Last Name"
                id="lastName"
                name="lastName"
                type={InputTextType.text}
                onChange={handleChange}
                value={values.lastName}
                error={errors.lastName}
                touched={touched.lastName} 
              />

              <InputText
                label="Email"
                id="email"
                name="email"
                type={InputTextType.email}
                onChange={handleChange}
                value={values.email}
                error={errors.email}
                touched={touched.email} 
              />

              <InputText
                label="Phone number"
                id="phone"
                name="phone"
                type={InputTextType.text}
                onChange={handleChange}
                value={values.phone}
                error={errors.phone}
                touched={touched.phone}

                mask={value => maskPhone({ value, ...propsMask })}
                unMask={value => unMaskPhone({ value, ...propsMask })}
              />

              <RadioZone 
                data={mockDataRadio}
                value={values.subject}
                onChange={handleChange}
                title="Select Subject?" 
                name="subject"   
                error={errors.subject}
                touched={touched.subject}            
              />

              <InputText 
                type={InputTextType.textarea}
                label="Message"                
                id="message"
                name="message"
                onChange={handleChange}
                value={values.message}
                placeholder="Write your message..."
                rows={1}
                error={errors.message}
                touched={touched.message}
              />
              
              <div className={styles.submitContainer}>
                <button 
                  type="submit" 
                  className={classNames(poppins.className, styles.submit)}
                >
                  Send Message
                </button>

                {/* <Image 
                  src={paperPlane}
                  height={112}
                  width={240} 
                  alt="paperPlane"
                  className={styles.paperPlane}
                /> */}

              </div>
            </fieldset>
          </Form>
        )}
      </Formik>
    </section>
  )
}
