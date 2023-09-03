import * as Yup from 'yup';

export const ValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('First Name is required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Last Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  phone: Yup.string()
    .min(11, 'To short number')
    .max(12, 'No correct number')
    .required('Phone Number is required'),
  subject: Yup.string()
    .required('Subject value required'),
  message: Yup.string()
    .required('Message is required'),
});
