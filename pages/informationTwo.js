import Image from 'next/image';
import styles from '../styles/informationTwo.module.css';
import Head from 'next/head';
import Arrow from '@/components/Arrow';
import Navbar from '@/components/Footer';
import BackArrow from '@/components/BackArrow';
import Link from 'next/link';
import Header from '@/components/Header';

export default function InformationTwo() {
  return (
    <>
     <Head>
        <title>Information - Open Doors</title>
        <meta name="description" content="Unlocking a better tomorrow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.main}>
      <div className={styles.infoBackground}>
    <Header/>
    <Navbar/>

        <Image
          src="/images/info-background-2.png"
          alt="Info"
          width={414}
          height={894}
        />

        <div className={styles.text}>
          <h2>You are not alone.</h2>
          <br></br>
            <p> In 2022, 1 in 4 Canadians suffered from food-insecurity and did not know where their next meal was coming from</p>
             </div>
          <div className={styles.arrow}>
          <Link href="/infograph">
          <Arrow/>
          </Link>
          </div>

          <div className={styles.backarrow}>
          <Link href="/information">
          <BackArrow/>
          </Link>
          </div>
          
      </div>
      </div>
    </>
  );
}