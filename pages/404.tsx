import { Poppins } from 'next/font/google';
import styles from './404.module.css';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500','700']
});

export default function NotFound() {
  const router = useRouter();

  return (
    <main className={classNames(poppins.className, styles.mainContent)}>
      <h1>404 - Page Not Found</h1>

      <Link href={'/'} className={styles.link}>Link to HomePage</Link>

      <p onClick={() => router.back()} className={styles.link}>
        Link to previous route
      </p>
    </main>
  )
}
