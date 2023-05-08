import Image from 'next/image';
import styles from '../styles/homepage.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Button from '@/components/Button';


export default function HomePage() {
  return (
    <>
     <Head>
        <title> Main - Open Doors</title>
        <meta name="description" content="Unlocking a better tomorrow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.container}> 
        <Header />
        <Image
            src="/images/homepage-small.png"
            alt="Info"
            width={414}
            height={530}
        />
        <div className={styles.text}>
          <h1 className={styles.name} >Open Doors</h1>
          <h2> Together, lets unlock a better tomorrow!</h2>
        </div>     
        <div className={styles.buttons}>
          <Link href="/support">
            <Button text="Find Help" />
          </Link>
          <Link href="/quiz1">
            <Button text="Support Quiz" />
          </Link>
        </div>
      </div>
    </>
  );
}