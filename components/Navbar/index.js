import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'


export default function Navbar() {
  return (
    <>
      <Image
        src="logo.svg"
        width={100}
        height={100}
      />
    </>
  )
}
