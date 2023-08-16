import { Button } from '../Button'
import { CardContainer, CardTitle, CardTitleReviewContainer } from './style'

import estrela from '../../assets/images/estrela.png'
import { ButtonFilter } from '../Button/style'

type Props = {
  image: string
  title: string
  review: number
  description: string
  filter: string
}

export const Card = ({ image, title, review, description, filter }: Props) => {
  return (
    <CardContainer>
      <ButtonFilter>{filter}</ButtonFilter>
      <div>
        <img src={image} alt={title} />
      </div>
      <CardTitleReviewContainer>
        <CardTitle>{title}</CardTitle>
        <div>
          <span>{review}</span>
          <img src={estrela} alt="Estrela" />
        </div>
      </CardTitleReviewContainer>
      <p>{description}</p>
      <div>
        <Button type="button">Saiba mais</Button>
      </div>
    </CardContainer>
  )
}
