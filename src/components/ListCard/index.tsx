import { ListCardContainer, ListCardGridContainer } from './style'

import macarrao from '../../assets/images/macarrao.png'
import niguiri from '../../assets/images/niguiri.png'
import { Card } from '../Card'

export const ListCard = () => {
  return (
    <ListCardContainer>
      <ListCardGridContainer>
        <Card
          image={niguiri}
          title={'teste'}
          review={5}
          description={'teste teste teste'}
          filter={'italiana'}
        />
        <img src={niguiri} alt="Niguiri" />
        <img src={macarrao} alt="Macarrão" />
        <img src={macarrao} alt="Macarrão" />
        <img src={macarrao} alt="Macarrão" />
        <img src={macarrao} alt="Macarrão" />
        <img src={macarrao} alt="Macarrão" />
      </ListCardGridContainer>
    </ListCardContainer>
  )
}
