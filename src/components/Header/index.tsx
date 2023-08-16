import fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import { Imagem } from './styles'

export const Header = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${fundo})` }}>
      <img src={logo} alt="Logo" />
      <p>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </p>
    </Imagem>
  )
}
