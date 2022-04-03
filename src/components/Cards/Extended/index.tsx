import _ from './Extended.module.scss'
import Image from 'next/image'

export default function Extended({ item }: Props) {
  return (
    <article className={_.card}>
      <header className={_.details}>
        <h1 className={_.title}>{item.title}</h1>
        <p className={_.description}>
          {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          facilis mollitia ad adipisci cumque dolor.`.substring(0, 50)}
        </p>
      </header>
      <picture className={_.image}>
        <Image
          className={_.img}
          src={item.image}
          layout='responsive'
          priority={true}
          alt={item.title}
          objectFit='cover'
          height={200}
          width={400}
        />
      </picture>
    </article>
  )
}

interface Props {
  item?: any
}
