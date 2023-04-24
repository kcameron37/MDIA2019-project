import { useState } from 'react';
import styles from './popup.module.css';
import Image from 'next/image';


export default function PopUp() {
  const [popup, setPopup] = useState(true);

  return (
    <>
      {popup ? (
        <div className={styles.container}>
          <div className={styles.popup__area}>
            <Image
              src="/logo/front-logo.png"
              width={300}
              height={200}
            />
            <h1 className={styles.warningText}>Warning</h1>
            <p>If you require immediate assistance, please contact emergency services by dialing 911  </p>
            <h3 className={styles.close} onClick={() => setPopup(false)}>Close</h3>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
