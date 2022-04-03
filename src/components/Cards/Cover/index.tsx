import Image from 'next/image'
import _ from './Cover.module.scss'

export default function Cover({ item }: Props) {
  return (
    <article className={_.cover}>
      <Image
        src={item.image}
        alt={item.title}
        width={100}
        height={160}
        priority={true}
        layout='responsive'
        objectFit='cover'
        className={_.img}
      />
    </article>
  )
}

interface Props {
  item?: any
}
