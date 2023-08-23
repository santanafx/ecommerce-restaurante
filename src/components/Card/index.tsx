import { Link } from 'react-router-dom'
import estrela from '../../assets/images/estrela.png'

import * as S from './style'

import { Button } from '../Button'
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
    <S.CardContainer>
      <S.CardContainerFilter>
        {destacado === true && <ButtonFilter>Destaque da semana</ButtonFilter>}

        {tipo !== undefined && (
          <Link to={`/perfil/${tipo}`}>
            <ButtonFilter>{tipo}</ButtonFilter>
          </Link>
        )}
      </S.CardContainerFilter>
      <div>
        <img src={capa} alt={titulo} />
      </div>
      <S.CardTitleReviewContainer>
        <S.CardTitle>{titulo}</S.CardTitle>

        <div>
          <span>{avaliacao}</span>
          <img src={estrela} alt="Estrela" />
        </div>
      </S.CardTitleReviewContainer>
      <p>{descricao}</p>
      <Link to={`/perfil/${tipo}`}>
        <Button type="button">Saiba mais</Button>
      </Link>
    </S.CardContainer>
  )
}
