import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/logo/top-logo.svg"
          width={60}
          height={60}
          alt="Top logo"
        />
      </Link>  
      <Link href="/">
        <Image
          src="/logo/top-logo.svg"
          width={60}
          height={60}
          alt="Top logo"
        />
      </Link>  
      <Link href="/">
        <Image
          src="/logo/top-logo.svg"
          width={60}
          height={60}
          alt="Top logo"
        />
      </Link>  
    </header>
  );
}