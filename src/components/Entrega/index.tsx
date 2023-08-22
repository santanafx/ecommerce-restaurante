import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../Button'
import {
  EntregaButtonContainer,
  EntregaContainer,
  EntregaContent,
  EntregaForm
} from './styles'
import { RootReducer } from '../../store'
import { entregaClose } from '../../store/reducers/carrinho'

export const Entrega = () => {
  const dispatch = useDispatch()
  const { isEntregaOpen } = useSelector((state: RootReducer) => state.carrinho)

  const closeEntrega = () => {
    dispatch(entregaClose())
  }

  return (
    <EntregaContainer className={isEntregaOpen ? 'visivel' : ''}>
      <EntregaContent>
        <EntregaForm>
          <h2>Entrega</h2>
          <label htmlFor="">Quem irá receber</label>
          <input type="text" />
          <label htmlFor="">Endereço</label>
          <input type="text" />
          <label htmlFor="">Cidade</label>
          <input type="text" />
          <div className="cep-numero">
            <div>
              <label htmlFor="">CEP</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Número</label>
              <input type="text" />
            </div>
          </div>

          <label htmlFor="">Complemento(opcional)</label>
          <input type="text" />
          <EntregaButtonContainer>
            <Button type="button">Continuar com o pagamento</Button>
            <Button type="button">Voltar para o carrinho</Button>
          </EntregaButtonContainer>
        </EntregaForm>
      </EntregaContent>

      <div className="overlay" onClick={closeEntrega}></div>
    </EntregaContainer>
  )
}
