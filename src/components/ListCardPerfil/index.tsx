import { useState, useEffect } from 'react'

import * as S from './style'

import { CardPerfil } from '../CardPerfil'

export type Cardapio = {
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

type Props = {
  tipo: string | undefined
}

export const ListCardPerfil = ({ tipo }: Props) => {
  const [listaDeComidas, setListaDeComidas] = useState<ListaDeComidas[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setListaDeComidas(res))
  }, [])

  const tipoDaComida: ListaDeComidas[] = listaDeComidas.filter(
    (e) => e.tipo === tipo
  )

  const tipoDaComidaCardapio: Cardapio[] =
    tipoDaComida.length > 0 ? tipoDaComida[0].cardapio : []

  return (
    <S.ListCardPerfilContainer>
      <S.ListCardPerfilGridContainer>
        {tipoDaComidaCardapio.map((element) => {
          return (
            <CardPerfil
              key={element.id}
              id={element.id}
              foto={element.foto}
              preco={element.preco}
              nome={element.nome}
              descricao={element.descricao}
              porcao={element.porcao}
            />
          )
        })}
      </S.ListCardPerfilGridContainer>
    </S.ListCardPerfilContainer>
  )
}
