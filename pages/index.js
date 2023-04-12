import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
  const [showLogo, setShowLogo] = useState(true);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationClass(styles.slideDown);
      setShowLogo(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Open Doors</title>
        <meta name="description" content="Unlocking a better tomorrow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={`${styles.container} ${animationClass}`}>
        {showLogo ? (
          <Image
            src="/logo/front-logo.png"
            alt="Logo"
            className={styles.logo}
            width={414}
            height={500}
          />
        ) : (
          <>
            <div className={styles.homeImage} />
            <div className={styles.backgroundImage}>
              <Image
                src="/images/home-background.png"
                alt="Home"
                className={styles.logo}
                width={414}
                height={892}
              />
            </div>
            <div className={styles.text}>
              <div className={styles.header}>
                <h1 className={styles.header}>Welcome to Open Doors!</h1>
              </div>
              <div className={styles.header}>
                <p className={styles.paragraph}>
                  We are here to help,
                  <br />
                  so let's get started
                </p>
              </div>
              <Link href="/information">
                <button className={styles.button}>Go to Information Page</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}