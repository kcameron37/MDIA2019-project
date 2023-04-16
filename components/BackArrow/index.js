import React from 'react';
import styles from './backarrow.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function BackArrow({ onClick, text }) {
  return (
<div className={styles.arrowContainer}>
 

      <Image
        src="/icons/back-arrow-white.svg"
        alt="Next"
        width={50} 
        height={50}
      />

  
</div>
  )}