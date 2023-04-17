import Image from 'next/image';
import styles from '../styles/quiz.module.css';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Quiz1() {
  const router = useRouter();
  const [answer, setAnswer] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/quiz2?answer1=${encodeURIComponent(answer)}`);
  };

  const handleAnswerClick = (selectedAnswer) => {
    setAnswer(selectedAnswer);
  };

  return (
    <>
      <Head>
        <title>Quiz - Open Doors</title>
        <meta name="description" content="Unlocking a better tomorrow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        
      </Head>
      <div className={styles.main}>
        <div className={styles.container}>
          <Link className={styles.backButton} href="/..">
            <Image
              src={"/icons/back-button-orange.svg"}
              width={50}
              height={50}
            />
          </Link>
          <Link href="/">
            <Image
              src={"/logo/top-logo.svg"}
             width={75}
             height={75}
            />
          </Link>
          <Image
            src={"/images/quiz-status.svg"}
            width={240}
            height={80}
          />
          <div className={styles.questionContainer}>
            <Image
              src={"/images/quiz-page1.png"}
              width={150}
              height={200}
            />
            <div className={styles.question}>
              <h1>
                Question 1:
                <br />
                What is your age range?
              </h1>
            </div>
          </div>
          <div className={styles.answers}>
            <button className={`${styles.quizButton} ${styles.button}`} onClick={() => handleAnswerClick('over18')}>Over 18</button>
            <button className={`${styles.quizButton} ${styles.button}`} onClick={() => handleAnswerClick('under18')}>Under 18</button>
            <button className={`${styles.submitButton} ${styles.button}`} onClick={handleSubmit} disabled={!answer}>
              Submit
            </button>
          </div>
        </div>
        <Navbar/>
      </div>
    </>
  );
}