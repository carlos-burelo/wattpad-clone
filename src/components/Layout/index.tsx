import Header from '../Header'
import Navbar from '../Navbar'
import _ from './Layout.module.scss'

export default function Layout({ children, title }: Props) {
  return (
    <>
      <Header title={title} />
      <main className={`container ${_.container}`}>{children}</main>
      <Navbar />
    </>
  )
}

interface Props {
  children: any
  title: string
}
