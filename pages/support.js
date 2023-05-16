import Link from 'next/link';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useState } from 'react';
import styles from 'styles/support.module.css'
import Button from '@/components/Button';

const MinorYoungAdultAssistance = () => (
  <>
    <div className={styles.text}>
      <div className={styles.textBlock}>
        <h2>Covenant House Youth Crisis Program</h2>
        <p>Phone Number: 1-877-685-7474</p>
        <p>Address: 1280 Seymour St, Vancouver, BC V6B 3N9</p>
        <p>Description: At Covenant House's Crisis Program, we welcome young people, aged 16 to 24, who are at risk of, or are experiencing, homelessness. Our first priority is to meet young people’s basic needs, a safe space to sleep, nutritious food, warm clothing, and showers.</p>
        <p><Link href="https://www.covenanthousebc.org/programs-services/housing/crisis-program/"><p>Click here to learn more</p></Link></p>
      </div>
      
      <div className={styles.textBlock}>
        <h2>Directions Youth Haven</h2>
        <p>Phone Number: 1-877-685-7474</p>
        <p>Address: 1138 Burrard Street, Vancouver, BC V6Z 1Y7</p>
        <p>Description: A low-barrier, temporary emergency residential program providing five beds for Vancouver youth ages 16 to 19 of all genders and orientations who are street involved and need a safe space to stay.</p>
        <p><Link href="https://vancouver.pathwaysbc.ca/programs/555"><p>Click here to learn more</p></Link></p>
      </div>     
    </div>
  </>
);

const IncomeSupport = () => (
  <>
    <div className={styles.text}>
      <div className={styles.textBlock}>
        <h2>BC Income Assistance Application</h2>
        <p>Phone Number: 1-866-866-0800</p>
        <p>Address: 180 Main St Vancouver BC V6A 3V5</p>
        <p>Description: Access Low-income support in British Columbia by applying today.</p>
        <p><Link href="https://www2.gov.bc.ca/gov/content/family-social-supports/income-assistance/apply-for-assistance"><p>Click here to learn more</p></Link></p>
      </div>
      
      <div className={styles.textBlock}>
        <h2>Gathering Place Community Centre</h2>
        <p>Phone Number: 604-665-2391</p>
        <p>Address: 609 Helmcken Street, Vancouver, BC V6B 5R1</p>
        <p>Description: The Gathering Place Community Centre offers programs and services to the Downtown South community. We primarily serve vulnerable populations, including people on lower income, people with disabilities, seniors, people of diverse ethnic backgrounds, the LGBTQ community, youth, and people who are homeless.</p>
        <p><Link href="https://vancouver.ca/parks-recreation-culture/gathering-place-location.aspx"><p>Click here to learn more</p></Link></p>
      </div>
    </div>
  </>
);

const LowIncomeHousing = () => (
  <>
    <div className={styles.text}>
      <div className={styles.textBlock}>
        <h2>Lookout Housing and Health Society</h2>
        <p>Phone Number: 604-255-0340</p>
        <p>Address: 544 Columbia Street, New Westminster, B.C., V3L 1B1</p>
        <p>Description: We offer a range of programs, housing, and health solutions to vulnerable adults living with multiple challenges.</p>
        <p><Link href="https://lookoutsociety.ca/contact-us/"><p>Click here to learn more</p></Link></p>
      </div>
      
      <div className={styles.textBlock}>
        <h2>Belkin House Vancouver</h2>
        <p>Phone Number: 604-681-3405</p>
        <p>Address: 555 Homer Street, Vancouver</p>
        <p>Description: We provide a clean, safe, secure, and comfortable accommodation for those who have come down on hard times.</p>
        <p><Link href="https://belkinhousesa.ca/"><p>Click here to learn more</p></Link></p>
      </div> 
    </div>  
  </>
);

const LowIncomeFoodSupport = () => (
  <>
    <div className={styles.text}>
      <div className={styles.textBlock}>
        <h2>Greater Vancouver Food Bank</h2>
        <p>Phone Number: 604-876-3601</p>
        <p>Address: 8345 Winston Street Burnaby, BC V5A 2H3</p>
        <p>Description: Providing Healthy Food to Those in Need.</p>
        <p><Link href="https://foodbank.bc.ca/find-food/locations/"><p>Click here to learn more</p></Link></p>
      </div>
      
      <div className={styles.textBlock}>
        <h2>The Dugout - Hot breakfast</h2>
        <p>Phone Number: -604-685-5239</p>
        <p>Address: 59 Powell St, Vancouver, BC V6A 1E9</p>
        <p>Description: The Dugout provides a community living room where people can spend time off the streets.</p>
        <p><Link href="https://www.thedugout.org/our-programs"><p>Click here to learn more</p></Link></p>
      </div>      
    </div>
  </>
);

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Results - Open Doors</title>
        <meta name="description" content="Unlocking a better tomorrow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header/>
      <div className={styles.container}>
        <Image
          src="/images/homepage-small.png"
          width={414}
          height={530}
        />
        <div className={styles.dropdown}>
          <label className={styles.title} htmlFor="options">Select an option:</label>
          <select className={styles.menu} id="options" onChange={handleOptionChange}>
            <option value="">--Select an option--</option>
            <option value="minor-young-adult-assistance">Minor/Young Adult Assistance</option>
            <option value="income-support">Income Support</option>
            <option value="low-income-housing">Low-Income Housing</option>
           <option value="low-income-food-support">Low-Income Food Support</option>
          </select>
          {selectedOption === 'minor-young-adult-assistance' && <MinorYoungAdultAssistance />}
          {selectedOption === 'income-support' && <IncomeSupport />}
          {selectedOption === 'low-income-housing' && <LowIncomeHousing />}
          {selectedOption === 'low-income-food-support' && <LowIncomeFoodSupport />}
        </div>

        <div className={styles.button}>
                  <Link href="/about">
                    <Button text="About Us" />
                  </Link> 
                  </div>
        <Footer/>
      </div>
    </>
  );
};

export default Dropdown;
