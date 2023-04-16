import Image from 'next/image';
import styles from '../styles/information.module.css';
import Head from 'next/head';
import Arrow from '@/components/Arrow';
import Link from 'next/link';
import BackArrow from '@/components/BackArrow';
import Navbar from '@/components/Navbar';

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
      <Navbar/>
      <div className={styles.infoBackground}>
        <Image
          src="/images/info-background-1.png"
          alt="Info"
          width={414}
          height={894}
        />

        <div className={styles.text}>
          <h2>Did you know,<br></br> you are not alone?</h2>
          </div>
          <div className={styles.para}>
          <p>10.8 percent of familes in BC are consideder to be low income and need additional support</p>
          </div>
          <div className={styles.arrow}>
          <Link href="/informationTwo">
          <Arrow/>
          </Link>
          </div>
          <div className={styles.backarrow}>
          <Link href="/">
          <BackArrow/>
          </Link>
          </div>
      </div>
      </div>
    </>
  );
}