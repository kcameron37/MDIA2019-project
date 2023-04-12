import React from 'react';
import styles from '../styles/OrangeButton.module.css';

export default function Information({ children, onClick })  {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
