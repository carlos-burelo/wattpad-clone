import { DotsIcon, ListIcon } from '../../../constants/icons'
import _ from './Book.module.scss'

export default function Book({ title }: Props) {
  return (
    <section className={_.container}>
      <h1>
        {title ||
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem deserunt consectetur unde voluptatem sint similique itaque eligendi esse distinctio aut?'}
      </h1>
      <div className={_.info}>
        <div className={_.details}>
          <span className={_.caps}>
            <ListIcon />
            55 capitulos
          </span>
          <mark className={_.status}>Completo</mark>
        </div>
        <div className={_.more}>
          <DotsIcon />
        </div>
      </div>
      <p className={_.description}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio atque
        porro quia suscipit explicabo aspernatur! Rerum repellendus corporis
        voluptates magni.
      </p>
    </section>
  )
}

interface Props {
  title: string
}
