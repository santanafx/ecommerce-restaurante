import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import { RootReducer } from '../../store'

import * as S from './style'
import { useEffect, useState } from 'react'

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

export const PerfilHeader = ({ tipo }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.carrinho)
  const [listaDeComidas, setListaDeComidas] = useState<ListaDeComidas[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setListaDeComidas(res))
  }, [])

  const tipoDaComida: ListaDeComidas[] = listaDeComidas.filter(
    (e) => e.tipo === tipo
  )

  console.log(tipoDaComida)

  return (
    <>
      {tipoDaComida.length > 0 && (
        <S.PerfilHeaderContainer style={{ backgroundImage: `url(${fundo})` }}>
          <span>Restaurantes</span>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <span>{items.length} produto(s) no carrinho</span>
        </S.PerfilHeaderContainer>
      )}
      {tipoDaComida.length > 0 && (
        <S.PerfilHeaderComida
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${tipoDaComida[0].cardapio[0].foto})`
          }}
        >
          <h3>{tipoDaComida[0].tipo}</h3>
          <h2>{tipoDaComida[0].titulo}</h2>
        </S.PerfilHeaderComida>
      )}
    </>
  )
}
