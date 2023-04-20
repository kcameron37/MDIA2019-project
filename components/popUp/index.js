import { useState } from 'react';
import styles from './popup.module.css';


export default function PopUp() {
  const [popup, setPopup] = useState(true);

  return (
    <>
      {popup ? (
        <div className={styles.container}>
          <div className={styles.popup__area}>
            <img src="/logo/front-logo.png"
            alt="Warning" 
            className={styles.warningImage}
             />
            <h1 className={styles.warningText}>Warning</h1>
            
            <p className={styles.text}>If you require immediate assistance, please contact emergency services by dialing 911  </p>
            <h3 className={styles.close} onClick={() => setPopup(false)}>Close</h3>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}