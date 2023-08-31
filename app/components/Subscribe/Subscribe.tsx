'use client'

import { Inter, Manrope, Poppins } from 'next/font/google'
import classNames from 'classnames';
import styles from './Subscribe.module.css';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });
const manrope = Manrope({ subsets: ['latin'], weight: ['500'] });

export const Subscribe = () => {
  const SubscribeSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={SubscribeSchema}
      onSubmit={(values, { resetForm }) => {
        alert(`user ${values.email} subscribed!`);
        resetForm();
      }} 
    >
      {({ values, errors, touched, handleChange }) => (
        <Form className={styles.subscribe}>
          <label 
            htmlFor="subscribe" 
            className={styles.label}
          >
            Join Our Newsletter
          </label>

          <div className={styles.container}>
            <input 
              placeholder="Your email address"
              id="subscribe"
              name="email"
              type="email"
              onChange={handleChange}
              value={values.email}
              className={classNames(poppins.className, styles.input)}
            />

            <button 
              type="submit" 
              className={classNames(poppins.className, styles.submit)}
            >
              Subscribe
            </button>

            {errors.email && touched.email 
            ? <div className={styles.error}>
              {errors.email}
              </div> 
            : null}
          </div>

          <p className={manrope.className}>*  Will send you weekly updates for your better tool management.</p>
        </Form>)}
    </Formik>
  )
};
