import React from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'

export default function HomePage(events) {
  // fetch events client side
  //console.log(events)

  return (
    <>
      <Layout>
        <h1>Upcoming Events</h1>
        {events.length === 0 && <h3>No events to show</h3>}

        {events.map((evt) => (
          <h3 key={evt.id}>{evt.name}</h3>
        ))}
      </Layout>
      <Link href='/about'>About</Link>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  // fetch events server side
  // console.log(events)

  return {
    props: { events },
    // reval every second
    revalidate: 1,
  }
}
