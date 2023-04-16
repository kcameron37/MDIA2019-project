import Image from 'next/image';
import styles from '../styles/informationTwo.module.css';
import Head from 'next/head';
import Arrow from '@/components/Arrow';
import Navbar from '@/components/Navbar';
import BackArrow from '@/components/BackArrow';
import Link from 'next/link';


export default function InformationTwo() {
  return (
    <>
     <Head>
        <title>More Information - Open Doors</title>
        <meta name="description" content="Unlocking a better tomorrow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.main}>
      <div className={styles.infoBackground}>

    <Navbar/>

        <Image
          src="/images/info-background-2.png"
          alt="Info"
          width={414}
          height={894}
        />

        <div className={styles.text}>
          <h3>Did you know, 1 in 4 Canadians suffer from food-insecurity?</h3>
             </div>
          <div className={styles.arrow}>
          <Arrow/>
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