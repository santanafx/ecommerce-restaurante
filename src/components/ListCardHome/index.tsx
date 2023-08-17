import { ListCardContainer, ListCardGridContainer } from './style'

import macarrao from '../../assets/images/macarrao.png'
import niguiri from '../../assets/images/niguiri.png'
import { Card } from '../Card'

type Props = {
  id: number
  image: string
  title: string
  review: number
  description: string
  filter: string
  highlight?: string
}

const listaDeComidas: Props[] = [
  {
    id: 1,
    image: niguiri,
    title: 'Hioki Sushi',
    review: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    filter: 'Japonesa',
    highlight: 'Destaque Da Semana'
  },
  {
    id: 2,
    image: macarrao,
    title: 'La Dolce Vita Trattoria',
    review: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    filter: 'Italiana'
  },
  {
    id: 3,
    image: macarrao,
    title: 'La Dolce Vita Trattoria',
    review: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    filter: 'Italiana'
  },
  {
    id: 4,
    image: macarrao,
    title: 'La Dolce Vita Trattoria',
    review: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    filter: 'Italiana'
  },
  {
    id: 5,
    image: macarrao,
    title: 'La Dolce Vita Trattoria',
    review: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    filter: 'Italiana'
  },
  {
    id: 6,
    image: macarrao,
    title: 'La Dolce Vita Trattoria',
    review: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    filter: 'Italiana'
  }
]

export const ListCardHome = () => {
  return (
    <ListCardContainer>
      <ListCardGridContainer>
        {listaDeComidas.map((e) => (
          <Card
            key={e.id}
            image={e.image}
            title={e.title}
            review={e.review}
            description={e.description}
            filter={e.filter}
            highlight={e.highlight}
          />
        ))}
      </ListCardGridContainer>
    </ListCardContainer>
  )
}
