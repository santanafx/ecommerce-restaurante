import {
  BotaoLixeiraImgContainer,
  CarrinhoCard,
  CarrinhoContainer,
  CarrinhoContent,
  CarrinhoEntrega
} from './styles'
import { Button } from '../Button'
import lixeira from '../../assets/images/lixeira.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove, entregaOpen } from '../../store/reducers/carrinho'

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pr-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

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
    <CarrinhoContainer className={isOpen ? 'visivel' : ''}>
      <CarrinhoContent>
        {items.map((e, index) => {
          return (
            <CarrinhoCard key={e.nome}>
              <img src={e.foto} alt={e.nome} />
              <div>
                <h2>{e.nome}</h2>
                <span>R$ {e.preco}</span>
              </div>
              <BotaoLixeiraImgContainer>
                <img
                  src={lixeira}
                  alt="Botao de remover item"
                  onClick={() => {
                    if (typeof e.id === 'number') {
                      removeItem(e.id + index)
                    }
                  }}
                />
              </BotaoLixeiraImgContainer>
            </CarrinhoCard>
          )
        })}
        <CarrinhoEntrega>
          <div>
            <span>Valor total</span>
            <span>{formataPreco(precoTotal())}</span>
          </div>

          <Button type="button" onClick={openEntrega}>
            Continuar com a entrega
          </Button>
        </CarrinhoEntrega>
      </CarrinhoContent>
      <div className="overlay" onClick={closeCart}></div>
    </CarrinhoContainer>
  )
}
