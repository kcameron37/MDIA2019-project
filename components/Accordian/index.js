import React, { useState } from 'react';
import styles from './accordian.module.css';;

export default function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <div className={styles.title} onClick={() => setIsOpen(!isOpen)}>
        {title}
      </div>
      {isOpen && <div className={styles.content}>{content}</div>}
    </div>
  );
}