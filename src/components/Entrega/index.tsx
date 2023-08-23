import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'
import { useState } from 'react'
import { RootReducer } from '../../store'
import { entregaClose, open, clear } from '../../store/reducers/carrinho'
import { useFormik } from 'formik'

import * as Yup from 'yup'
import * as S from './style'

import { Button } from '../Button'
import { parseToBrl } from '../../utils'

type RespostaApi = {
  orderId: string
}

export const Entrega = () => {
  const dispatch = useDispatch()
  const { isEntregaOpen, items } = useSelector(
    (state: RootReducer) => state.carrinho
  )
  const [pagamento, setPagamento] = useState(false)
  const [cartao, setCartao] = useState(false)
  const [realizarPedido, setRealizarPedido] = useState(false)
  const [respostaDaApi, setRespostaDaApi] = useState<RespostaApi | null>(null)

  const form = useFormik({
    initialValues: {
      id: '',
      price: '',
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      name: '',
      numberOfCard: '',
      code: '',
      month: '',
      year: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      description: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'A cidade precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(9, 'O cep precisa ter 8 caracteres')
        .max(9, 'O cep precisa ter 8 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .min(1, 'O número precisa ter pelo menos 1 caractere')
        .required('O campo é obrigatório'),
      name: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      numberOfCard: Yup.string()
        .min(19, 'O cartão precisa ter 16 caracteres')
        .max(19, 'O cartão precisa ter 16 caracteres')
        .required('O campo é obrigatório'),
      code: Yup.string()
        .min(3, 'O CVV precisa ter 3 caracteres')
        .max(3, 'O CVV precisa ter 3 caracteres')
        .required('O campo é obrigatório'),
      month: Yup.string()
        .min(2, 'O mês precisa ter 3 caracteres')
        .max(2, 'O mês precisa ter 3 caracteres')
        .required('O campo é obrigatório'),
      year: Yup.string()
        .min(2, 'O ano precisa ter caracteres')
        .max(2, 'O ano precisa ter caracteres')
        .required('O campo é obrigatório')
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch(
          'https://fake-api-tau.vercel.app/api/efood/checkout',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              products: items.map((item) => ({
                id: item.id,
                price: item.preco
              })),
              delivery: {
                receiver: values.receiver,
                adress: {
                  description: values.description,
                  city: values.city,
                  zipCode: values.zipCode,
                  number: values.number,
                  complement: values.complement
                }
              },
              payment: {
                card: {
                  name: values.name,
                  number: values.numberOfCard,
                  code: values.code,
                  expires: {
                    month: values.month,
                    year: values.year
                  }
                }
              }
            })
          }
        )

        if (response.ok) {
          const responseData = await response.json()
          console.log('Resposta da API:', responseData)
          setRespostaDaApi(responseData)
          form.resetForm()
        } else {
          console.error('Erro ao enviar POST para a API:', response.status)
        }
      } catch (error) {
        console.error('Erro ao enviar POST para a API:', error)
      }
    }
  })

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
    form.handleSubmit()
    setCartao(!cartao)
    setRealizarPedido(!realizarPedido)
  }

  const precoTotal = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const concluir = () => {
    setPagamento(false)
    setCartao(false)
    setRealizarPedido(false)
    dispatch(clear())
    dispatch(entregaClose())
    form.resetForm()
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <S.EntregaContainer className={isEntregaOpen ? 'visivel' : ''}>
      <S.EntregaContent>
        <form onSubmit={form.handleSubmit}>
          <section className={!pagamento ? '' : 'invisivel'}>
            <h2>Entrega</h2>
            <label htmlFor="receiver">Quem irá receber</label>
            <input
              type="text"
              id="receiver"
              name="receiver"
              value={form.values.receiver}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('receiver') ? 'error' : ''}
            />
            <label htmlFor="description">Endereço</label>
            <input
              type="text"
              id="description"
              name="description"
              value={form.values.description}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('description') ? 'error' : ''}
            />
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              id="city"
              name="city"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('city') ? 'error' : ''}
            />
            <div className="cep-numero">
              <div>
                <label htmlFor="zipCode">CEP</label>
                <InputMask
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={form.values.zipCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('zipCode') ? 'error' : ''}
                  mask="99999-999"
                />
              </div>
              <div>
                <label htmlFor="number">Número</label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  value={form.values.number}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('number') ? 'error' : ''}
                />
              </div>
            </div>
            <label htmlFor="complement">Complemento(opcional)</label>
            <input
              type="text"
              id="complement"
              name="complement"
              value={form.values.complement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('complement') ? 'error' : ''}
            />
            <S.EntregaButtonContainer>
              <Button type="button" onClick={continuarPagamento}>
                Continuar com o pagamento
              </Button>
              <Button type="button" onClick={voltarCarrinho}>
                Voltar para o carrinho
              </Button>
            </S.EntregaButtonContainer>
          </section>
          <section className={cartao ? '' : 'invisivel'}>
            <h2>Pagamento - Valor a pagar {parseToBrl(precoTotal())}</h2>
            <label htmlFor="name">Nome no cartão</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.values.name}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('name') ? 'error' : ''}
            />
            <div className="cartao-cvv">
              <div>
                <label htmlFor="numberOfCard">Número do cartão</label>
                <InputMask
                  type="text"
                  id="numberOfCard"
                  name="numberOfCard"
                  value={form.values.numberOfCard}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('numberOfCard') ? 'error' : ''}
                  mask="9999-9999-9999-9999"
                />
              </div>
              <div>
                <label htmlFor="code">CVV</label>
                <InputMask
                  type="text"
                  id="code"
                  name="code"
                  value={form.values.code}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('code') ? 'error' : ''}
                  mask="999"
                />
              </div>
            </div>
            <div className="mesVencimento-anoVencimento">
              <div>
                <label htmlFor="month">Mês de vencimento</label>
                <InputMask
                  type="text"
                  id="month"
                  name="month"
                  value={form.values.month}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('month') ? 'error' : ''}
                  mask="99"
                />
              </div>
              <div>
                <label htmlFor="year">Ano de vencimento</label>
                <InputMask
                  type="text"
                  id="year"
                  name="year"
                  value={form.values.year}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('year') ? 'error' : ''}
                  mask="99"
                />
              </div>
            </div>
            <S.EntregaButtonContainer>
              <Button type="submit" onClick={finalizarPagamento}>
                Finalizar pagamento
              </Button>
              <Button type="button" onClick={continuarPagamento}>
                Voltar para edição de endereço
              </Button>
            </S.EntregaButtonContainer>
          </section>
          <section className={realizarPedido ? '' : 'invisivel'}>
            {respostaDaApi ? (
              <>
                <h2>Pedido realizado - {respostaDaApi.orderId}</h2>
                <p>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido.
                </p>
                <p>
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras.
                </p>
                <p>
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição.
                </p>
                <p>
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </p>

                <S.EntregaButtonContainer>
                  <Button type="button" onClick={concluir}>
                    Concluir
                  </Button>
                </S.EntregaButtonContainer>
              </>
            ) : (
              <p>Carregando...</p>
            )}
          </section>
        </form>
      </S.EntregaContent>
      <div className="overlay" onClick={openCart}></div>
    </S.EntregaContainer>
  )
}
