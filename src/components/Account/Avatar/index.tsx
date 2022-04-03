import Image from 'next/image'
import _ from './Avatar.module.scss'

export default function Avatar({}: Props) {
  return (
    <Image
      src='/me.jfif'
      layout='fixed'
      width={30}
      height={30}
      className={_.avatar}
      alt='Avatar'
      objectFit='cover'
    />
  )
}

interface Props {}
