import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'
import Link from 'next/link'

function Home({data}) {

  // const {data, error} = useSWR('/api/people', (url) => fetch(url).then(res => res.json()));

  // if(error) return <div>{error}</div>
  if(!data) return <div>Loading...</div>

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      { data.map(person => (
        <li key={person.id}>
          <Link href={`people/${person.id}`}>
            <a>{person.name}</a>
          </Link>
        </li>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/people')
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

export default Home
