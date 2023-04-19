import Image from 'next/image';
import Head from 'next/head';
import Button from '@/components/Button';
import styles from '@/styles/quiz.module.css'
import Navbar from '@/components/Footer';
import Link from 'next/link';
import PopUp from '@/components/popUp';

export default function Quiz() {
    return(
        <>
            <Head>
                <title>Quiz</title>
                <meta name="description" content="Unlocking a better tomorrow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className={styles.main}>
                <PopUp/>
                <div className={styles.container}>
                    <Image
                        src={"/favicon.png"}
                        width={75}
                        height={75}
                    />
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
                            <h1>Question 1:</h1>
                            <h2>What is your age range?</h2> 
                        </div>
                    </div>
                    
                </div>
                <Navbar/>
            </div>
        </>
    )
}