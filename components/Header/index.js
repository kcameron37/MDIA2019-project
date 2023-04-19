import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <div className={styles.container}>
              
                <div className={styles.logo}>          
                <Image
                  src="/logo/top-logo.svg"
                  width={60}
                  height={60}
                  alt="Top logo"
                />
                </div>
            
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}