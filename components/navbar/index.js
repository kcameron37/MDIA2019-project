import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'


export default function Navbar() {
    return (
       <>
       <main className={styles.main}>
          
       <nav className="navbar">
      <div className="logo">
        <Link href="/">
          <p>Logo</p>
        </Link>
      </div>
      <div className="menu-icon">
        
      </div>    
     </nav> 
         </main>
       </>
     )
   }
   