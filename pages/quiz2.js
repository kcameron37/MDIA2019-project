import Image from 'next/image';
import styles from '../styles/quiz.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '@/components/Footer';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Quiz2() {
  const router = useRouter();
  const [answer, setAnswer] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/quiz3?answer1=${encodeURIComponent(answer)}`);
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
          <Link className={styles.backButton} href="/quiz1">
            <Image
              src={"/icons/back-button-orange.svg"}
              width={50}
              height={50}
            />
          </Link>
          <Link href="/homePage">
            <Image
              src={"/logo/top-logo.svg"}
             width={75}
             height={75}
            />
          </Link>
          <Image
            src={"/images/quiz-status-2.svg"}
            width={240}
            height={80}
          />
          <div className={styles.questionContainer}>
            <Image
              src={"/images/quiz-page2.png"}
              width={150}
              height={200}
            />
            <div className={styles.question}>
              <h1>
                Question 2:
              </h1>
              <h2>
                Have you accessed low income social assistant programs before?
              </h2>
            </div>
          </div>
          <div className={styles.answers}>
            <button className={`${styles.quizButton} ${styles.button}`} onClick={() => handleAnswerClick('yes')}>Yes</button>
            <button className={`${styles.quizButton} ${styles.button}`} onClick={() => handleAnswerClick('no')}>No</button>
            <button className={`${styles.submitButton} ${styles.button}`} onClick={handleSubmit} disabled={!answer}>
              Submit
            </button>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}

