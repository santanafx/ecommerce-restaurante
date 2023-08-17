import { Button } from '../Button'
import {
  CardPerfilContainer,
  CardPerfilImgContainer,
  CardPerfilTitle,
  CardPerfilTitleReviewContainer
} from './style'

type Props = {
  image: string
  title: string
  description: string
}

export const CardPerfil = ({ image, title, description }: Props) => {
  return (
    <CardPerfilContainer>
      <CardPerfilImgContainer>
        <img src={image} alt={title} />
      </CardPerfilImgContainer>
      <CardPerfilTitleReviewContainer>
        <CardPerfilTitle>{title}</CardPerfilTitle>
      </CardPerfilTitleReviewContainer>
      <p>{description}</p>
      <Button type="button">Adicionar ao carrinho</Button>
    </CardPerfilContainer>
  )
}
