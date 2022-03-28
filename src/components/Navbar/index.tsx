import Link from 'next/link'
import {
  BellIcon,
  BookmarkIcon,
  HeartIcon,
  HomeIcon,
  SearchIcon,
} from '../../constants/icons'
import _ from './Navbar.module.scss'

export default function Navbar({}: Props) {
  return (
    <nav className={_.navbar}>
      <Link href={''}>
        <a className={`${_.link} ${_.active}`}>
          <HomeIcon />
        </a>
      </Link>
      <Link href={''}>
        <a className={_.link}>
          <SearchIcon />
        </a>
      </Link>
      <Link href={''}>
        <a className={_.link}>
          <BookmarkIcon />
        </a>
      </Link>
      <Link href={''}>
        <a className={_.link}>
          <BellIcon />
        </a>
      </Link>
      <Link href={''}>
        <a className={_.link}>
          <HeartIcon />
        </a>
      </Link>
    </nav>
  )
}

interface Props {}
