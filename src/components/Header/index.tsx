import { Link } from 'react-router-dom'
import fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

import * as S from './style'

export const Header = () => {
  return (
    <S.HeaderImage style={{ backgroundImage: `url(${fundo})` }}>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <p>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </p>
    </S.HeaderImage>
  )
}
