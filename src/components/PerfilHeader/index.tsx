import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import macarrao from '../../assets/images/macarrao.png'
import { RootReducer } from '../../store'

import * as S from './style'

export const PerfilHeader = () => {
  const { items } = useSelector((state: RootReducer) => state.carrinho)

  return (
    <>
      <S.PerfilHeaderContainer style={{ backgroundImage: `url(${fundo})` }}>
        <span>Restaurantes</span>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <span>{items.length} produto(s) no carrinho</span>
      </S.PerfilHeaderContainer>
      <S.PerfilHeaderComida
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${macarrao})`
        }}
      >
        <h3>Italiana</h3>
        <h2>La Dolce Vita Trattoria</h2>
      </S.PerfilHeaderComida>
    </>
  )
}
