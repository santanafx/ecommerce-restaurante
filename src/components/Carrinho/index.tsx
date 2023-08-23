import { useDispatch, useSelector } from 'react-redux'
import { close, remove, entregaOpen } from '../../store/reducers/carrinho'
import { RootReducer } from '../../store'
import lixeira from '../../assets/images/lixeira.png'

import * as S from './style'

import { Button } from '../Button'
import { parseToBrl } from '../../utils'

export const Carrinho = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.carrinho)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    if (id !== undefined) {
      dispatch(remove(id))
    }
  }

  const precoTotal = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const openEntrega = () => {
    dispatch(entregaOpen())
    dispatch(close())
  }

  return (
    <S.CarrinhoContainer className={isOpen ? 'visivel' : ''}>
      <S.CarrinhoContent>
        {items.map((e, index) => {
          return (
            <S.CarrinhoCard key={e.nome}>
              <img src={e.foto} alt={e.nome} />
              <div>
                <h2>{e.nome}</h2>
                <span>R$ {e.preco}</span>
              </div>
              <S.BotaoLixeiraImgContainer>
                <img
                  src={lixeira}
                  alt="Botao de remover item"
                  onClick={() => {
                    if (typeof e.id === 'number') {
                      removeItem(e.id + index)
                    }
                  }}
                />
              </S.BotaoLixeiraImgContainer>
            </S.CarrinhoCard>
          )
        })}
        <S.CarrinhoEntrega>
          <div>
            <span>Valor total</span>
            <span>{parseToBrl(precoTotal())}</span>
          </div>

          <Button type="button" onClick={openEntrega}>
            Continuar com a entrega
          </Button>
        </S.CarrinhoEntrega>
      </S.CarrinhoContent>
      <div className="overlay" onClick={closeCart}></div>
    </S.CarrinhoContainer>
  )
}
