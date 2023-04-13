import Image from 'next/image';
import styles from '../styles/informationTwo.module.css';
import Head from 'next/head';
import Arrow from '@/components/Arrow';

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
        <Image
          src="/images/info-background.png"
          alt="Info"
          width={414}
          height={894}
        />

        <div className={styles.text}>
          <h2>Did you know,<br></br> you are not alone?</h2>
          <p>ADD A FACT</p>
          </div>
          <div className={styles.arrow}>
          <Arrow/>
          </div>
      </div>
      </div>
    </>
  );
}