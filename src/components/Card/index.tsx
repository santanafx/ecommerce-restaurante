import { Button } from '../Button'
import { Link } from 'react-router-dom'
import {
  CardContainer,
  CardContainerFilter,
  CardTitle,
  CardTitleReviewContainer
} from './style'

import estrela from '../../assets/images/estrela.png'
import { ButtonFilter } from '../Button/style'

type Props = {
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

export const Card = ({
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa
}: Props) => {
  return (
    <CardContainer>
      <CardContainerFilter>
        {destacado === true && <ButtonFilter>Destaque da semana</ButtonFilter>}

        {tipo !== undefined && (
          <Link to={`/perfil/${tipo}`}>
            <ButtonFilter>{tipo}</ButtonFilter>
          </Link>
        )}
      </CardContainerFilter>
      <div>
        <img src={capa} alt={titulo} />
      </div>
      <CardTitleReviewContainer>
        <CardTitle>{titulo}</CardTitle>

        <div>
          <span>{avaliacao}</span>
          <img src={estrela} alt="Estrela" />
        </div>
      </CardTitleReviewContainer>
      <p>{descricao}</p>
      <Link to={`/perfil/${tipo}`}>
        <Button type="button">Saiba mais</Button>
      </Link>
    </CardContainer>
  )
}
