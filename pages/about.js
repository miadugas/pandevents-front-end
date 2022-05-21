import React from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/About.module.css'

export default function AboutPage() {
  return (
    <Layout title='About TSTCO Events'>
      <div className={styles.container}>
        <h1>About</h1>
        <h3 className={styles.h3}>CongrEvents</h3>
        <p className={styles.p2}>
        CongrEvents organizes local Congregation events
        </p>
        <p className={styles.p2}>Version: 1.0.0</p>
        <Link href='/'>Home</Link>
      </div>
    </Layout>
  )
}
