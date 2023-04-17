import Image from 'next/image';
import styles from '../styles/quiz.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Quiz5() {
  const router = useRouter();
  const [answer, setAnswer] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/results?answer1=${encodeURIComponent(answer)}`);
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
          <Link className={styles.backButton} href="/quiz4">
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
            src={"/images/quiz-status-5.svg"}
            width={240}
            height={80}
          />
          <div className={styles.questionContainer}>
            <Image
              src={"/images/quiz-page5.png"}
              width={150}
              height={200}
            />
            <div className={styles.question}>
              <h1>
                Question 5:
              </h1>
              <h2>
                What is your income range?
              </h2>
            </div>
          </div>
          <div className={styles.answers}>
            <button className={`${styles.quizButton} ${styles.button}`} onClick={() => handleAnswerClick('Over')}>$18,000 or over</button>
            <button className={`${styles.quizButton} ${styles.button}`} onClick={() => handleAnswerClick('Under')}> Under $18,000</button>
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

