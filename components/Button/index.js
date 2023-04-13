import React from 'react';
import styles from './button.module.css';

export default function Button({ onClick, text }) {
  return (
    <button className={styles.buttonLarge} onClick={onClick}>
         {text}
    </button>
  );
}