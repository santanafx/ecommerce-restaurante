import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

import * as S from './style'

export const Footer = () => {
  return (
    <S.FooterContainer>
      <Link to="/">
        <S.FooterImagemLogo src={logo} alt="Logo" />
      </Link>
      <S.FooterContainerRedes>
        <img src={instagram} alt="Instagram" />
        <img src={facebook} alt="Facebook" />
        <img src={twitter} alt="Twitter" />
      </S.FooterContainerRedes>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </p>
    </S.FooterContainer>
  )
}
