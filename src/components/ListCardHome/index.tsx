import { useEffect, useState } from 'react'

import { Card } from '../Card'

import * as S from './style'

type Cardapio = {
  foto: string
  preco: number
  id: number | string
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
    <S.ListCardContainer>
      <S.ListCardGridContainer>
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
      </S.ListCardGridContainer>
    </S.ListCardContainer>
  )
}
