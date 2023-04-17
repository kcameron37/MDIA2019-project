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
        <h1>Open Doors</h1>
      <h2> You are not the only one going through this. So let's get started and find support.</h2>
      </div>
     
      <div className={styles.infoBackground}>
        <Image
          src="/images/homepage1.png"
          alt="Info"
          width={414}
          height={894}
        />

   


      <div className={styles.buttonLearn}>
      <Link href="/quiz1">
              <Button text="Find Help" />
                </Link>
        </div>

        <div className={styles.buttonQuiz1}>
      <Link href="/quiz1">
              <Button text="Quiz" />
                </Link>
        </div>
     
      
      </div>
      </div>
    </>
  );
}