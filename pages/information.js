import Image from 'next/image';
import styles from '../styles/information.module.css';
import Head from 'next/head';

export default function Information() {
  return (
    <>
      <div className={styles.infoBackground}>
        <Image
          src="/images/info-background.png"
          alt="Info"
          width={414}
          height={894}
        />
      </div>
    </>
  );
}