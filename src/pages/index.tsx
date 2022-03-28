import type { NextPage } from 'next'
import { useState } from 'react'
import Book from '../components/Cards/Book'
import CoverCard from '../components/Cards/Cover'
import ExtendedCard from '../components/Cards/Extended'
import Layout from '../components/Layout'
import ExtendedSlider from '../components/Sliders/Extended'

const Home: NextPage = () => {
  const [item, setItem] = useState(1)
  return (
    <Layout title='Inicio'>
      <ExtendedSlider>
        {[1, 2, 3, 4, 5].map((i) => (
          <ExtendedCard key={i} />
        ))}
      </ExtendedSlider>
      <ExtendedSlider title='Escogidos para ti'>
        {[1, 2, 3, 4, 5].map((i) => (
          <CoverCard item={i} key={i} />
        ))}
      </ExtendedSlider>
      <Book title='Some title for book card' />
    </Layout>
  )
}

export default Home
