import Image from 'next/image';
import styles from '../styles/infograph.module.css';
import Head from 'next/head';
import Arrow from '@/components/Arrow';
import Link from 'next/link';
import BackArrow from '@/components/BackArrow';
import Navbar from '@/components/Footer';
import BarGraph from '@/components/BarGraph';
import Header from '@/components/Header';

export default function InfoGraph() {
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
            src="/images/info-background-1.png"
            alt="Info"
            width={414}
            height={894}
          />
          <div className={styles.container}>
            <h2>Did you know homelessness in on the rise in Canada</h2>
          </div>

          <div className={styles.graph}>
            <BarGraph />
          </div>

          <div className={styles.arrow}>
            <Link href="/homePage">
              <Arrow />
            </Link>
          </div>
          <div className={styles.backarrow}>
            <Link href="/informationTwo">
              <BackArrow />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}