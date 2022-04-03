import Link from 'next/link'
import { useRouter } from 'next/router'
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
      <NavLink href='/' Icon={HomeIcon} />
      <NavLink href='/search' Icon={SearchIcon} />
      <NavLink href='/saved' Icon={BookmarkIcon} />
      <NavLink href='/notifications' Icon={BellIcon} />
      <NavLink href='/favorites' Icon={HeartIcon} />
    </nav>
  )
}

function NavLink({ href, Icon }: Props) {
  const router = useRouter()
  const classes = () => {
    return router.asPath === href ? `${_.link} ${_.active}` : _.link
  }

  return (
    <Link href={href}>
      <a className={classes()}>
        <Icon />
      </a>
    </Link>
  )
}

interface Props {
  href: string
  Icon: any
}
