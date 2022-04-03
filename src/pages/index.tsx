import type { GetServerSideProps, NextPage } from 'next'
import { useState } from 'react'
import Book from '../components/Cards/Book'
import CoverCard from '../components/Cards/Cover'
import ExtendedCard from '../components/Cards/Extended'
import Layout from '../components/Layout'
import ExtendedSlider from '../components/Sliders/Extended'
import { url } from '../constants/api'

const Home: NextPage<Props> = ({ lastest, emision }) => {
  const [item, setItem] = useState(1)
  return (
    <Layout title='Inicio'>
      <ExtendedSlider>
        {lastest.map((i) => (
          <ExtendedCard key={i} item={i} />
        ))}
      </ExtendedSlider>
      <ExtendedSlider title='Escogidos para ti'>
        {emision.map((i) => (
          <CoverCard item={i} key={i.id} />
        ))}
      </ExtendedSlider>
      <Book title='Some title for book card' />
    </Layout>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const lastestR = await fetch(`${url}/lastest`)
  const lastest = await lastestR.json()
  const emisionR = await fetch(`${url}/emision`)
  const emision = await emisionR.json()
  return {
    props: {
      lastest,
      emision,
    },
  }
}

interface Props {
  lastest: any[]
  emision: any[]
}
