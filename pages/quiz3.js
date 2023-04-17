import Image from 'next/image';
import styles from '../styles/homepage.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Quiz3() {
  const router = useRouter();
  const [answer, setAnswer] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/quiz4?answer1=${encodeURIComponent(answer)}`);
  };

  const handleAnswerClick = (selectedAnswer) => {
    setAnswer(selectedAnswer);
  };

  return (
    <>
      <Head>
        <title>Home HomePage - Open Doors</title>
        <meta name="description" content="Unlocking a better tomorrow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.main}>
        <Navbar />
        <div className={styles.infoBackground}>
          <Image src="/images/homepage1.png" alt="Info" width={414} height={894} />
          <div className={styles.container}>
            <h1>How many meals do you eat a day?</h1>
            <button onClick={() => handleAnswerClick('less')}>1 or less</button>
            <button onClick={() => handleAnswerClick('more')}>3 or more</button>
            <br />
            <button onClick={handleSubmit} disabled={!answer}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}