import { FaExclamationTriangle } from 'react-icons/fa'
import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/404.module.css'
//import Image from 'next/image';

export default function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
      <div className={styles.error}>
        {/* <h1>
          <FaExclamationTriangle />
        </h1> */}
      </div>
      {/* <div className={styles.errorText}></div> */}
      <div className={styles.errorText}>
        <h2>404</h2>
        <h4>Like god, this page also does not exist</h4>
        <Link href='/'>Go Back Home</Link>
      </div>
    </Layout>
  )
}
