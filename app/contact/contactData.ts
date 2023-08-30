import phoneIcon from '../assets/images/phone.icon.svg';
import emailIcon from '../assets/images/email.icon.svg';
import locationIcon from '../assets/images/location.icon.svg';
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type ContactData = {
    name: string;
    label: string;
    href: string;
    icon: StaticImport;
  }[]

export const contactData: ContactData = [
  {
    name: 'phone',
    label: '+1012 3456 789',
    href: 'tel:+1012 3456 789',
    icon: phoneIcon,
  },
  {
    name: 'email',
    label: 'demo@gmail.com',
    href: 'mailto:demo@gmail.com',
    icon: emailIcon,
  },
  {
    name: 'address',
    label: '132 Dartmouth Street Boston, Massachusetts 02156 United States',
    href: 'https://goo.gl/maps/5aeavvDUie1UuDW57',
    icon: locationIcon,
  }, 
]
