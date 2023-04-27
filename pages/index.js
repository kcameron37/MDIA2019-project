import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Button from '@/components/Button';
import Header from '@/components/Header';

export default function Home() {
  const [animationClass, setAnimationClass] = useState(styles.hide);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationClass(styles.fadeIn);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(loadingTimer);
  }, []);

  var name = process.env.NEXT_PUBLIC_NAME;
  
  return (
    <>
      <Head>
        <title>Home - Open Doors</title>
        <meta name="description" content="Unlocking a better tomorrow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={`${styles.container} ${animationClass}`}>
        {loading ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            }}
          >
            <Image
              src="/logo/loadingTwo.png"
              alt="Logo"
              className={styles.logo}
              width={414}
              height={300}
            />
            <div
              style={{
                marginTop: '100px',
                border: '5px solid rgba(0, 0, 0, 0.1)',
                borderLeftColor: 'orange',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                animation: 'spin 1s linear infinite',
              }}
            ></div>
            <style jsx global>{`
              @keyframes spin {
                0% {
                  transform: rotate(0deg);
                }
                100% {
                  transform: rotate(360deg);
                }
              }
            `}</style>
          </div>
        ) : (
          <>
            <div className={styles.pageContainer}>
              <Header/>
              <Image
                src="/images/home-background-small.png"
                alt="Home"
                width={414}
                height={530}
              />
              <div className={styles.text}>
                <h2>Welcome to </h2>
                <h1> Open Doors</h1>
                <p>
                  Unlocking a better tomorrow, <br></br>so let's get started today
                </p>  
                  <Link href="/information">
                    <Button text="Learn More" />
                  </Link> 
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}