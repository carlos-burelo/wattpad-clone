import Image from 'next/image'
import _ from './Cover.module.scss'

export default function Cover({ item }: Props) {
  return (
    <article className={_.cover}>
      <Image
        src='/images/cover.jpg'
        width={100}
        height={160}
        layout='responsive'
        className={_.img}
      />
    </article>
  )
}

interface Props {
  item?: number
}
