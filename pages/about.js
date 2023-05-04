import Image from 'next/image';
import styles from '../styles/homepage.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Button from '@/components/Button';


export default function About() {
  return (
    <>
     <Head>
        <title> About Us - Open Doors</title>
        <meta name="description" content="Unlocking a better tomorrow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.container}> 
        <Header />
        <Image
            src="/images/aboutUs.png"
            alt="Info"
            width={414}
            height={530}
        />
        <div className={styles.text}>
       
        </div>
      </div>
    </>
  );
}