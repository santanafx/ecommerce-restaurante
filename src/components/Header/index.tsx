import { Link } from 'react-router-dom'
import fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import { HeaderImage } from './styles'

export const Header = () => {
  return (
    <HeaderImage style={{ backgroundImage: `url(${fundo})` }}>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <p>
        Viva experiências gastronômicas <br />
        no conforto da sua casa.
      </p>
    </HeaderImage>
  )
}
