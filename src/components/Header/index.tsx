import { FlashIcon, SettingsIcon } from '../../constants/icons'
import Avatar from '../Account/Avatar'
import Button from '../Button'
import _ from './Header.module.scss'

export default function Header({ title }: Props) {
  return (
    <header className={`container ${_.header}`}>
      <h1 className={_.title}>{title}</h1>
      <div className={_.opts}>
        <Button color='premium' href='/pr'>
          <div className={_.flash}>
            <FlashIcon />
          </div>
          Prueba Premium
        </Button>
        <div className={_.icon}>
          <SettingsIcon />
        </div>
        <div className={_.account}>
          <Avatar />
        </div>
      </div>
    </header>
  )
}

interface Props {
  title: string
}
