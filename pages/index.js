import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar/'


export default function Home() {
  return (
    <>
      <Head>
        <title>Open Doors - Unlocking a better tomorrow</title>
        <meta name="description" content="Unlocking a better tomorrow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <Navbar/>


      </main>
    </>
  )
}
