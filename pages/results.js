import Image from 'next/image';
import styles from '../styles/results.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Accordion from '@/components/Accordian';

export default function Results() {
  const router = useRouter();
  const { answer1, answer2, answer3, answer4, answer5 } = router.query;

  const age = answer1 === 'over18' ? 'Over 18' : 'Under 18';
  const socialAssistance = answer2 === 'yes' ? 'Yes' : 'No';
  const mealsPerDay = answer3 === 'less' ? '1 or less' : '3 or more';
  const safePlaceTonight = answer4 === 'YesSafe' ? 'Yes' : 'No';
  const income = answer5 === 'Over' ? '$18,000 or over' : 'Under $18,000';

  return (
    <>
      <Head>
        <title>Results - Open Doors</title>
        <meta name="description" content="Unlocking a better tomorrow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <div className={styles.main}>
        <Image
          src="/images/homepage-small.png"
          width={414}
          height={530}
        />
        <div className={styles.container}>
          <div className={styles.text}>
            <h1>Let's find you help</h1>
            <p>How old are you? <br/> {age}</p>
            <p>In the past have you used social assistance? <br/> {socialAssistance}</p>
            <p>How many meals do you eat a day? <br/> {mealsPerDay}</p>
            <p>Do you have a safe place to stay tonight? <br/> {safePlaceTonight}</p>
            <p>What is your yearly income? <br/> {income}</p>
          </div>
            <Accordion/>
        </div>
      </div>
      <Footer />
    </>
  );
}