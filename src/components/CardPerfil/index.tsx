import { Button } from '../Button'
import {
  CardPerfilContainer,
  CardPerfilImgContainer,
  CardPerfilTitle,
  CardPerfilTitleReviewContainer
} from './style'

type Props = {
  foto: string
  preco?: number
  nome: string
  descricao: string
  porcao?: string
}

export const CardPerfil = ({ foto, preco, nome, descricao, porcao }: Props) => {
  return (
    <CardPerfilContainer>
      <CardPerfilImgContainer>
        <img src={foto} alt={nome} />
      </CardPerfilImgContainer>
      <CardPerfilTitleReviewContainer>
        <CardPerfilTitle>{nome}</CardPerfilTitle>
      </CardPerfilTitleReviewContainer>
      <p>{descricao}</p>
      <Button type="button">Adicionar ao carrinho</Button>
    </CardPerfilContainer>
  )
}
