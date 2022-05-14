import React from 'react';
import Head from 'next/head';
// import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'TSTCO | Find information on our events',
  description: 'Find the latest TSTCO events',
  keywords: 'tstco, satanism, events',
};
