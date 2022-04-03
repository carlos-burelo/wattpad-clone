import type { NextPage } from 'next'
import Chip from '../components/Category/Chip'
import Grid from '../components/Grid'
import Layout from '../components/Layout'
import Search from '../components/Search'

const SearchPage: NextPage = () => {
  return (
    <Layout title='Buscar'>
      <Search data={[]} />
      <h1 className='titleSection'>Categorias</h1>
      <Grid columns={2}>
        {['1', '2', '3', '4', '5', '6'].map((i) => (
          <Chip key={i} href={i} />
        ))}
      </Grid>
    </Layout>
  )
}

export default SearchPage
