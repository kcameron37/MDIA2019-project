import styles from '../styles/warning.module.css' 
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'


export default function Warning() {
    return (
       <>
         <Head>
        <title>Open Doors - Unlocking a better tomorrow</title>
        <meta name="description" content="Unlocking a better tomorrow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
       <main className={styles.main}>
          
            
         <body className={styles.body}>
         </body>
         </main>
       </>
     )
   }
   