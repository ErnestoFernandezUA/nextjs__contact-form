'use client'
import { useParams } from "next/navigation";
import styles from './page.module.css'

export default function Features() {
  const params = useParams();

  if (!params) {
    return (
      <section className={styles.mainContent}>
        <h1 className={styles.title}>Some problem with params</h1>
      </section>
    );
  }

  return (
    <section className={styles.mainContent}>
      <h1 className={styles.title}>features {params.id}</h1>
    </section>
  );
}
