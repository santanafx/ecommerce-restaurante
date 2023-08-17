import { Button } from '../Button'
import {
  CardContainer,
  CardContainerFilter,
  CardTitle,
  CardTitleReviewContainer
} from './style'

import estrela from '../../assets/images/estrela.png'
import { ButtonFilter } from '../Button/style'

type Props = {
  image: string
  title: string
  review: number
  description: string
  filter: string
  highlight?: string
}

export const Card = ({
  image,
  title,
  review,
  description,
  filter,
  highlight
}: Props) => {
  return (
    <CardContainer>
      <CardContainerFilter>
        {highlight !== undefined && <ButtonFilter>{highlight}</ButtonFilter>}

        {filter !== undefined && <ButtonFilter>{filter}</ButtonFilter>}
      </CardContainerFilter>
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
