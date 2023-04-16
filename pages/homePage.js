import Image from 'next/image';
import styles from '../styles/homepage.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';

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
      <div className={styles.container}>
     
      <Image
          src="/logo/front-logo.png"
          alt="Logo"
          width={414}
          height={150}
        />
      </div>
     
      <div className={styles.infoBackground}>
        <Image
          src="/images/homepage1.png"
          alt="Info"
          width={414}
          height={894}
        />

   

      <div className={styles.buttonQuiz}>
      <Link href="/information">
              <Button text="Take the Quiz" />
                </Link>
      </div>

      <div className={styles.buttonLearn}>
      <Link href="/information">
              <Button text="Find Help" />
                </Link>
        </div>

     
      
      </div>
      </div>
    </>
  );
}