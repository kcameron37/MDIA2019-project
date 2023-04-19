import React from 'react';
import styles from './arrow.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Arrow({ onClick, text }) {
  return (
<div className={styles.arrowContainer}>
 

      <Image
        src="/icons/next-button-orange.svg"
        alt="Next"
        width={50} 
        height={50}
      />

  
</div>
  )}