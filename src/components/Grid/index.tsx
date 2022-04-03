import _ from './Grid.module.scss'

export default function Grid({ children, columns }: Props) {
  const attrs = {
    style: {
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
    },
  }
  return (
    <section className={_.grid} {...attrs}>
      {children}
    </section>
  )
}

interface Props {
  children: any
  columns: number
}
