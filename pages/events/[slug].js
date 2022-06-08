import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaPencilAlt, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import EventMap from '@/components/EventMap'
import { API_URL } from '@/config/index'
import styles from '@/styles/Event.module.css'
import { useRouter } from 'next/router'

export default function EventPage({ evt }) {
  const router = useRouter()

  return (
    <Layout>
      <div className={styles.event}>
        <h1>{evt.name}</h1>
        <span className={styles.date}>
          {new Date(evt.date).toLocaleDateString('en-US')} at {evt.time}
        </span>
        <br />

        <ToastContainer />
        {evt.image && (
          <div className={styles.image}>
            <Image
              src={evt.image.formats.medium.url}
              width={960}
              height={600}
            />
          </div>
        )}

        <h3>Details:</h3>
        <p>{evt.details}</p>
        <hr />
        <h3>Description:</h3>
        <p>{evt.description}</p>
        <hr />
        <h3>Venue:</h3>
        <p>{evt.venue}</p>
        <hr />
        <h3>Address:</h3>
        <p>{evt.address}</p>
        <hr />
        <h3>Web Link:</h3>
        <p>{evt.link}</p>
        <hr />
        <br />
        <EventMap evt={evt} />

        <div className={styles.bottom}>
          <Link href='/events' className='btn-secondary'>
            <a className={styles.back}>{'<'} Go Back</a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/events`)
//   const events = await res.json()

//   const paths = events.map((evt) => ({
//     params: { slug: evt.slug },
//   }))

//   return {
//     paths,
//     fallback: true,
//   }
// }

// export async function getStaticProps({ params: { slug } }) {
//   const res = await fetch(`${API_URL}/events?slug=${slug}`)
//   const events = await res.json()

//   return {
//     props: {
//       evt: events[0],
//     },
//     revalidate: 1,
//   }
// }

export async function getServerSideProps({ query: { slug } }) {
  //console.log(slug)
  const res = await fetch(`${API_URL}/events?slug=${slug}`)
  const events = await res.json()

  return {
    props: {
      evt: events[0],
    },
  }
}
