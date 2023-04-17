import Image from 'next/image';
import Head from 'next/head';
import Button from '@/components/Button';
import styles from '@/styles/quiz.module.css'
import Navbar from '@/components/Navbar';
import Link from 'next/link';

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
                <Image
                    src={"/Quiz status.svg"}
                    width={240}
                    height={80}
                />
                <Navbar/>
            </div>
        </>
    )
}