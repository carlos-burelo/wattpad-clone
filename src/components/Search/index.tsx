import { SearchIcon } from '../../constants/icons'
import _ from './Search.module.scss'

export default function Search({}: Props) {
  return (
    <div className={_.search}>
      <div className={_.icon}>
        <SearchIcon />
      </div>
      <input type='search' className={_.input} />
    </div>
  )
}

interface Props {
  data: any[]
}
