import Image from 'next/image';
import styles from '../styles/information.module.css';
import Head from 'next/head';

export default function Information() {
  return (
    <>
     <Head>
        <title>Open Doors</title>
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
      </div>
      </div>
    </>
  );
}