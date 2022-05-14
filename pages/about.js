import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function AboutPage() {
  return (
    <Layout title='About TSTCO Events'>
      <h1>About</h1>
      <h2>PandEvents</h2>
      <p>PandEvents organizes local chapter events</p>
      <p>Version: 1.0.0</p>
      <Link href='/'>Home</Link>
    </Layout>
  );
}
