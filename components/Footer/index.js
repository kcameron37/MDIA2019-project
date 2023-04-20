import Link from 'next/link';
import styles from './Footer.module.css';
import Button from '@/components/Button';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <Image src="/icons/home-button.svg" height={50} width={50} />
      </Link>

      <Link href="/quiz1">
        <Image src="/icons/quiz-button.svg" height={50} width={50} />
      </Link>

      <Link href="/support">
        <Image src="/icons/help-button.svg" height={50} width={50} />
      </Link>
    </footer>
  );
}


