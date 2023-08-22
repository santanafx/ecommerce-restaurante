import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../Button'
import {
  EntregaButtonContainer,
  EntregaContainer,
  EntregaContent,
  EntregaForm
} from './styles'
import { RootReducer } from '../../store'
import { entregaClose, open } from '../../store/reducers/carrinho'
import { useState } from 'react'

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pr-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const Entrega = () => {
  const dispatch = useDispatch()
  const { isEntregaOpen, items } = useSelector(
    (state: RootReducer) => state.carrinho
  )
  const [pagamento, setPagamento] = useState(false)
  const [cartao, setCartao] = useState(false)
  const [realizarPedido, setRealizarPedido] = useState(false)

  const voltarCarrinho = () => {
    dispatch(open())
    dispatch(entregaClose())
  }

  const openCart = () => {
    dispatch(entregaClose())
  }

  const continuarPagamento = () => {
    setPagamento(!pagamento)
    setCartao(!cartao)
  }

  const finalizarPagamento = () => {
    setCartao(!cartao)
    setRealizarPedido(!realizarPedido)
  }

  const precoTotal = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
    <EntregaContainer className={isEntregaOpen ? 'visivel' : ''}>
      <EntregaContent>
        {!pagamento ? (
          <EntregaForm>
            <h2>Entrega</h2>
            <label htmlFor="receptor">Quem irá receber</label>
            <input type="text" id="receptor" />
            <label htmlFor="endereco">Endereço</label>
            <input type="text" id="endereco" />
            <label htmlFor="cidade">Cidade</label>
            <input type="text" id="cidade" />
            <div className="cep-numero">
              <div>
                <label htmlFor="cep">CEP</label>
                <input type="text" id="cep" />
              </div>
              <div>
                <label htmlFor="numero">Número</label>
                <input type="text" id="numero" />
              </div>
            </div>
            <label htmlFor="complemento">Complemento(opcional)</label>
            <input type="text" id="complemento" />
            <EntregaButtonContainer>
              <Button type="button" onClick={continuarPagamento}>
                Continuar com o pagamento
              </Button>
              <Button type="button" onClick={voltarCarrinho}>
                Voltar para o carrinho
              </Button>
            </EntregaButtonContainer>
          </EntregaForm>
        ) : (
          ''
        )}

        {cartao ? (
          <EntregaForm>
            <h2>Pagamento - Valor a pagar {formataPreco(precoTotal())}</h2>
            <label htmlFor="receptor">Nome no cartão</label>
            <input type="text" id="receptor" />
            <div className="cartao-cvv">
              <div>
                <label htmlFor="cep">Número do cartão</label>
                <input type="text" id="cep" />
              </div>
              <div>
                <label htmlFor="numero">CVV</label>
                <input type="text" id="numero" />
              </div>
            </div>
            <div className="mesVencimento-anoVencimento">
              <div>
                <label htmlFor="cep">Mês de vencimento</label>
                <input type="text" id="cep" />
              </div>
              <div>
                <label htmlFor="numero">Ano de vencimento</label>
                <input type="text" id="numero" />
              </div>
            </div>
            <EntregaButtonContainer>
              <Button type="button" onClick={finalizarPagamento}>
                Finalizar pagamento
              </Button>
              <Button type="button" onClick={continuarPagamento}>
                Voltar para edição de endereço
              </Button>
            </EntregaButtonContainer>
          </EntregaForm>
        ) : (
          ''
        )}

        {realizarPedido ? (
          <EntregaForm>
            <h2>Pedido realizado - ORDER_ID</h2>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>

            <EntregaButtonContainer>
              <Button type="button">Concluir</Button>
            </EntregaButtonContainer>
          </EntregaForm>
        ) : (
          ''
        )}
      </EntregaContent>

      <div className="overlay" onClick={openCart}></div>
    </EntregaContainer>
  )
}
