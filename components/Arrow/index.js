import React from 'react';
import styles from './arrow.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Arrow({ onClick, text }) {
  return (
<div className={styles.arrowContainer}>
  <Link href="/info2">

      <Image
        src="/icons/arrow-white.svg"
        alt="Next"
        width={50} 
        height={50}
      />

  </Link>
</div>
  )}