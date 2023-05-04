import React, { useState } from 'react';
import styles from './accordian.module.css';;
import Link from 'next/link';

export default function Accordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <div className={styles.title} onClick={() => setIsOpen(!isOpen)}>
        <h1>View Results</h1>
      </div>
      {isOpen &&
        <div className={styles.content}>
          <div className={styles.item}>
            <h2>Under 18:</h2>
            <Link
              href="https://www.covenanthousebc.org/programs-services/housing/crisis-program/">
              <p>Coventent House Youth Crisis Program</p> 
            </Link>
            <p>
              Phone Number: 1-866-866-0800
              <br/>
              Address: 1280 Seymour St, Vancouver, BC V6B 3N9
              <br />
              Description: At Covenant House Crisis Program, we welcome young people, aged 16 to 24, who are at risk of, or are experiencing, homelessness. Our first priority is to meet young people's basic needs, a safe space to sleep, nutritious food, warm clothing, and showers
            </p>
          </div>
          <div className={styles.item}>
            <h2>Social Assistance:</h2>
            <Link
              href="https://www2.gov.bc.ca/gov/content/family-social-supports/income-assistance/apply-for-assistance">
              <p>BC Income Assistance Application</p> 
            </Link>
            <p>
              Phone Number: 1-877-685-7474
              <br/>
              Address: 180 Main St Vancouver BC V6A 3V5
              <br />
              Description: Access Low-income support in British Columbia by applying today
            </p>
          </div>
          <div className={styles.item}>
            <h2>Food:</h2>
            <Link
              href="https://foodbank.bc.ca/find-food/locations/">
              <p>Greater Vancouver Food Bank</p> 
            </Link>
            <p>
              Phone Number: 604-876-3601
              <br/>
              Address: 8345 Winston Street Burnaby, BC V5A 2H3
              <br />
              Description: Providing Healthy Food to Those in Need
            </p>
          </div>
          <div className={styles.item}>
            <h2>Shelter:</h2>
            <Link
              href="https://belkinhousesa.ca/">
              <p>Belkin House Vancouver</p> 
            </Link>
            <p>
              Phone Number: 604 681-3405
              <br/>
              Address: 555 Homer Street, Vancouver
              <br />
              Description: We provide a clean, safe, secure, and comfortable accommodation for those who have come down on hard times.
            </p>
          </div>
          <div className={styles.item}>
            <h2>Shelter:</h2>
            <Link
              href="https://belkinhousesa.ca/">
              <p>Belkin House Vancouver</p> 
            </Link>
            <p>
              Phone Number: 604 681-3405
              <br/>
              Address: 555 Homer Street, Vancouver
              <br />
              Description: We provide a clean, safe, secure, and comfortable accommodation for those who have come down on hard times.
            </p>
          </div>
          <div className={styles.item}>
            <h2>Income:</h2>
            <Link
              href="https://www.heretohelp.bc.ca/q-and-a/how-do-i-apply-for-income-assistance">
              <p>Here to help BC</p> 
            </Link>
            <p>
              Phone Number: 604-669-7600
              <br/>
              Address: 905-1130 West Pender St, Vancouver, BC, V6E 4A4
              <br />
              Description: Here to help will help you navigate through the Provincial income assistance, which has three income levels: basic assistance (also called welfare), Persons with Disabilities benefits (PWD), and the Persons with Persistent and Multiple Barriers to employment benefits.
            </p>
          </div>
        </div>}
    </div>
  );
}