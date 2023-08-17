import { ListCardPerfilContainer, ListCardPerfilGridContainer } from './style'

import pizza from '../../assets/images/pizza.png'
import { CardPerfil } from '../CardPerfil'

type Props = {
  id: number
  image: string
  title: string
  description: string
}

const listaDeComidasItaliana: Props[] = [
  {
    id: 7,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 8,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 9,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 10,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 11,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 12,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

export const ListCardPerfil = () => {
  return (
    <ListCardPerfilContainer>
      <ListCardPerfilGridContainer>
        {listaDeComidasItaliana.map((e) => (
          <CardPerfil
            key={e.id}
            image={e.image}
            title={e.title}
            description={e.description}
          />
        ))}
      </ListCardPerfilGridContainer>
    </ListCardPerfilContainer>
  )
}
