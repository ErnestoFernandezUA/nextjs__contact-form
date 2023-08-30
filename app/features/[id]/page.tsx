'use client'
import { useParams } from "next/navigation";
import styles from './page.module.css'

export default function Features() {
  const params = useParams();

  return (
    <section className={styles.mainContent}>
      <h1 className={styles.title}>features {params.id}</h1>
    </section>
  )
}
