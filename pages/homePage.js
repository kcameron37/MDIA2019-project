import Image from 'next/image';
import styles from '../styles/information.module.css';
import Head from 'next/head';
import Arrow from '@/components/Arrow';
import Link from 'next/link';
import BackArrow from '@/components/BackArrow';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  return (
    <>
     <Head>
        <title>Home HomePage - Open Doors</title>
        <meta name="description" content="Unlocking a better tomorrow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.main}>
      <Navbar/>
      <div className={styles.infoBackground}>
        <Image
          src="/images/homepage.png"
          alt="Info"
          width={414}
          height={894}
        />

     
      
      </div>
      </div>
    </>
  );
}