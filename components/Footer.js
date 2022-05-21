import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.p2}>
        These events are organized by The Satanic Temple Colorado and is not
        associated with The Satanic Temple global organization.
      </p>
      <p className={styles.p2}>Copyright &copy; CongrEvents 2021</p>
      <p className={styles.p2}>
        <Link href='/about'>About This Project</Link>
      </p>
    </footer>
  )
}
