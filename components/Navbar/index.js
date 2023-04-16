import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
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
