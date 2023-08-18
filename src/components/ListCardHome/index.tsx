import { ListCardContainer, ListCardGridContainer } from './style'

import macarrao from '../../assets/images/macarrao.png'
import niguiri from '../../assets/images/niguiri.png'
import { Card } from '../Card'
import { useEffect, useState } from 'react'

type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

type ListaDeComidas = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

export const ListCardHome = () => {
  const [listaDeComidas, setListaDeComidas] = useState<ListaDeComidas[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setListaDeComidas(res))
  }, [])

  return (
    <ListCardContainer>
      <ListCardGridContainer>
        {listaDeComidas.map((e) => (
          <Card
            key={e.id}
            titulo={e.titulo}
            destacado={e.destacado}
            tipo={e.tipo}
            avaliacao={e.avaliacao}
            descricao={e.descricao}
            capa={e.capa}
          />
        ))}
      </ListCardGridContainer>
    </ListCardContainer>
  )
}
