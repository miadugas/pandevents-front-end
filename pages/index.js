import Link from 'next/link'
import Layout from '@/components/Layout'
import EventItem from '@/components/EventItem'
import { API_URL } from '@/config/index'
import styles from '@/styles/EventItem.module.css'

export default function HomePage({ events }) {
  return (
    <Layout>
      <h1>Upcoming events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
      <br />
      {events.length > 0 && (
        <div className={styles.view}>
          <Link href='/events'>
            <a className='btn-secondary'>View All Events</a>
          </Link>
        </div>
      )}
    </Layout>
  )
}

export async function getStaticProps() {
  // show 3 events sorted by date & ascending on Home page
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`)
  const events = await res.json()

  //console.log(events)

  return {
    props: { events },
    revalidate: 1,
  }
}
