import { PerfilHeaderComida, PerfilHeaderContainer } from './style'

import fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import macarrao from '../../assets/images/macarrao.png'
import { Link } from 'react-router-dom'

export const PerfilHeader = () => {
  return (
    <>
      <PerfilHeaderContainer style={{ backgroundImage: `url(${fundo})` }}>
        <span>Restaurantes</span>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <span>0 produto(s) no carrinho</span>
      </PerfilHeaderContainer>
      <PerfilHeaderComida
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${macarrao})`
        }}
      >
        <h3>Italiana</h3>
        <h2>La Dolce Vita Trattoria</h2>
      </PerfilHeaderComida>
    </>
  )
}
