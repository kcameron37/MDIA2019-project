import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
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
      
      <main className={styles.main}>
        
      </main>
     
    </>
  );
}