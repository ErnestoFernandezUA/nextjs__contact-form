import Image from 'next/image';
import basket from '../../assets/images/basket.icon.svg';
import user from '../../assets/images/user.icon.svg';
import { ReactNode } from 'react';

type Route = {
  label: string;
  path: string;
  subLinks?: Route[];
  children?: ReactNode;
}

type routesConfigType = {
  [key: string]: Route;
}


export const routesConfig: routesConfigType = {
  home: {
    label: 'Home',
    path: '/',
  },
  features: {
    label: 'Features',
    path: '',
    subLinks: [
      {
        label: 'Features1',
        path: '/features/1',
      },
      {
        label: 'Features2',
        path: '/features/2',
      },
      {
        label: 'FeaturesOther1',
        path: '',
        subLinks: [
          {
            label: 'Features3',
            path: '/features/3',
          },
          {
            label: 'Features4',
            path: '/features/4',
          },
          {
            label: 'Features5',
            path: '/features/5',
          },
          {
            label: 'Features6',
            path: '/features/6',
          },
        ]
      },
      {
        label: 'FeaturesOther2',
        path: '',
        subLinks: [
          {
            label: 'Features7',
            path: '/features/7',
          },
          {
            label: 'Features8',
            path: '/features/8',
          },
          {
            label: 'Features9',
            path: '/features/9',
          },
        ]
      },
    ],
  },
  blog: {
    label: 'Blog',
    path: '/blog',
  },
  shop: {
    label: 'Shop',
    path: '/shop',
  },
  about: {
    label: 'About',
    path: '/about',
  },
  contact: {
    label: 'Contact',
    path: '/contact',
  },
  user: {
    label: '',
    path: '/user',
    children: <Image src={user} alt="useLogo" />,
  },
  basket: {
    label: 'basket',
    path: '/basket',
    children: <Image src={basket} alt="basketLogo" />,
  },
  privacyPolicy: {
    label: 'Privacy Policy',
    path: '/privacy-policy',
  },
  termsServices: {
    label: 'Terms & Services',
    path: '/terms-and-services',
  },
  termsOfUse: {
    label: 'Terms of Use',
    path: '/terms-of-use',
  },
  refundPolicy: {
    label: 'Refund Policy',
    path: '/refund-policy',
  },
  techlabzKeybox: {
    label: 'Techlabz Keybox',
    path: '/techlabz-keybox',
  },
  downloads: {
    label: 'Downloads',
    path: '/downloads',
  },
  forum: {
    label: 'Forum',
    path: '/forum',
  },
};
