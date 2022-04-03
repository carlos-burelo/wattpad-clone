import Link from 'next/link'
import _ from './Chip.module.scss'

export default function Chip({ href }: Props) {
  return (
    <Link href={href}>
      <a className={_.category}>
        <span className={_.text}>text</span>
      </a>
    </Link>
  )
}

interface Props {
  href: string
}
