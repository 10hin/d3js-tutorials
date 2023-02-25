import styles from '@/styles/Home.module.css'
import NetworkMap from "@/pages/NetworkMap";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.center}>
            CENTER
        </div>
        <NetworkMap />
      </main>
    </>
  )
}
