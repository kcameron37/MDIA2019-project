import Link from 'next/link';
import styles from './Footer.module.css';
import Button from '@/components/Button';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <Link href="/">
              <p>Home</p>
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link href="/support">
              <p>Support</p>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}


