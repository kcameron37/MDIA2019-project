import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [showLogo, setShowLogo] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState('#EAD9C5');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
      setBackgroundColor('#33718A');
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container} style={{ backgroundColor }}>
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
          <div className={styles.homeImage}>
          <Image
          src="/images/home.png"
          alt="Logo"
          className={styles.logo}
          width={414}
          height={896}
        />
          </div>
          <div className={styles.text}>
            <div className={styles.header}>
          <h1 className={styles.header}>Welcome to Open Doors!</h1>
          </div>
          <div className={styles.header}>
          <p className={styles.paragraph}>We are here to help,<br></br> so let's get started</p>
          </div>
          </div>
        </>
      )}
    </div>
  );
}