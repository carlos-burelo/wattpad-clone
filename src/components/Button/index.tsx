import _ from './Button.module.scss'
import Link from 'next/link'

export default function Button({ color, href, children }: Props) {
  return (
    <Link href={href}>
      <a className={`${_.button} ${_[`${color}`]}`}>{children}</a>
    </Link>
  )
}

interface Props {
  href: string
  color?: string
  children: any
}
