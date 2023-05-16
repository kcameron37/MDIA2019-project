import Image from 'next/image';
import styles from '../styles/information.module.css';
import Head from 'next/head';
import Arrow from '@/components/Arrow';
import Link from 'next/link';
import BackArrow from '@/components/BackArrow';
import Navbar from '@/components/Footer';
import Header from '@/components/Header';

export default function Information() {
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

          <div className={styles.text}>
            <h2>Did you know,<br></br> you are not alone?</h2>
            <br></br>
            <p>Approximately 10.8% of families residing in BC fall under the low-income category and require supplementary financial assistance.</p>
          </div>
          <div className={styles.arrow}>
            <Link href="/informationTwo">
              <Arrow />
            </Link>
          </div>
          <div className={styles.backarrow}>
            <Link href="/">
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}