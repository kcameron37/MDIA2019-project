import styles from './accordian.module.css';
import React, { useState } from 'react';

export default function Accordian({data }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {data.map((resource, index) => (
        <div key={index} className={styles.accordion}>
          <div className={styles.accordionHeader} onClick={toggleAccordion}>
            <h3>{resource.name}</h3>
            <div className={styles.toggleIcon}>{isOpen ? '-' : '+'}</div>
          </div>
          {isOpen && (
            <div className={styles.accordionBody}>
              <p>
                <strong>Website: </strong>
                <a href={resource.website} target="_blank" rel="noopener noreferrer">
                  {resource.website}
                </a>
              </p>
              <p>
                <strong>Phone Number: </strong>
                {resource.phoneNumber}
              </p>
              <p>
                <strong>Address: </strong>
                {resource.address}
              </p>
              <p>{resource.description}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

