import Link from 'next/link'
import { FaSignInAlt } from 'react-icons/fa'
import { useContext } from 'react'
import Image from 'next/image'
import AuthContext from '@/context/AuthContext'
import styles from '@/styles/EventItem.module.css'

export default function EventItem({ evt }) {
  const { user } = useContext(AuthContext)

  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={
            evt.image
              ? evt.image.formats.thumbnail.url
              : '/images/event-default.png'
          }
          width={170}
          height={100}
        />
      </div>

      <div className={styles.info}>
        <span>
          {new Date(evt.date).toLocaleDateString('en-US')} at {evt.time}
        </span>
        <h3>{evt.name}</h3>
      </div>
      <ul>
        {user ? (
          // If logged in
          <>
            <div className={styles.link}>
              <Link href={`/events/${evt.slug}`}>
                <a className='btn'>Details</a>
              </Link>
            </div>
          </>
        ) : (
          // If logged out
          <>
            <Link href='/account/login'>
              <a className='btn-secondary btn-icon'>
                <FaSignInAlt /> Login to View
              </a>
            </Link>
          </>
        )}
      </ul>
    </div>
  )
}
