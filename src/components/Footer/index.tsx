import { Link } from 'react-router-dom'
import {
  FooterContainer,
  FooterContainerRedes,
  FooterImagemLogo
} from './styles'

import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

export const Footer = () => {
  return (
    <FooterContainer>
      <Link to="/">
        <FooterImagemLogo src={logo} alt="Logo" />
      </Link>
      <FooterContainerRedes>
        <img src={instagram} alt="Instagram" />
        <img src={facebook} alt="Facebook" />
        <img src={twitter} alt="Twitter" />
      </FooterContainerRedes>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </p>
    </FooterContainer>
  )
}
