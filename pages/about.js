import Image from 'next/image';
import styles from '../styles/about.module.css';
import Head from 'next/head';
import Arrow from '@/components/Arrow';
import Link from 'next/link';
import BackArrow from '@/components/BackArrow';
import Navbar from '@/components/Footer';
import Header from '@/components/Header';

export default function About() {
  return (
    <>
      <Head>
        <title>Information - Open Doors</title>
        <meta name="description" content="Unlocking a better tomorrow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.main}>
        <Header />
        <Navbar />
        <div className={styles.infoBackground}>
          <Image
            src="/images/plain-background.png"
            alt="Info"
            width={414}
            height={894}
          />

          <div className={styles.text}>
            <h2>We are Open Doors! </h2>
            <br></br>
            <p>A low income support App. Helping low income indivduals and familes find support with shelter, food, and income relief alternatives </p>
            <br></br>
            <h3>Created by Kaitlyn, Eric & Johnathon</h3>
            <h3> Digital Design & Development </h3>
            <h3> Set H 2023 </h3>
          </div>

          <div className={styles.container}>
          <Image
              src="/favicon.png"
              width={200}
              height={200}
            />
          </div>

          <div className={styles.arrow}>
            <Link href="/support">
              <Arrow />
            </Link>
          </div>
          <div className={styles.backarrow}>
            <Link href="/suport">
              <BackArrow />
            </Link>
             </div>
        </div>
      </div>
    </>
  );
}