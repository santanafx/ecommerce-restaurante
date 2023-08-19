import { useState } from 'react'
import { Button } from '../Button'
import {
  BotaoCloseImgContainer,
  BotaoLixeiraImgContainer,
  CardPerfilContainer,
  CardPerfilImgContainer,
  CardPerfilTitle,
  CardPerfilTitleReviewContainer,
  Carrinho,
  CarrinhoCard,
  CarrinhoContent,
  CarrinhoEntrega,
  Modal,
  ModalContent
} from './style'

import close from '../../assets/images/close.png'
import lixeira from '../../assets/images/lixeira.png'

export type Comidas = {
  foto: string
  preco?: number
  nome: string
  descricao: string
  porcao?: string
}

export const CardPerfil = ({
  foto,
  preco,
  nome,
  descricao,
  porcao
}: Comidas) => {
  const [modal, setModal] = useState(false)
  const [carrinho, setCarrinho] = useState(false)
  return (
    <CardPerfilContainer>
      <CardPerfilImgContainer>
        <img src={foto} alt={nome} onClick={() => setModal(true)} />
      </CardPerfilImgContainer>
      <CardPerfilTitleReviewContainer>
        <CardPerfilTitle>{nome}</CardPerfilTitle>
      </CardPerfilTitleReviewContainer>
      <p>{descricao}</p>
      <Button
        type="button"
        onClick={() => {
          setCarrinho(true)
        }}
      >
        Adicionar ao carrinho
      </Button>
      <Carrinho className={carrinho ? 'visivel' : ''}>
        <CarrinhoContent>
          <CarrinhoCard>
            <img src={foto} alt={nome} />
            <div>
              <h2>{nome}</h2>
              <span>R$ {preco}</span>
            </div>
            <BotaoLixeiraImgContainer>
              <img
                src={lixeira}
                alt="Botao de remover item"
                // onClick={() => setModal(false)}
              />
            </BotaoLixeiraImgContainer>
          </CarrinhoCard>
          <CarrinhoEntrega>
            <div>
              <span>Valor total</span>
              <span>R$ preco total</span>
            </div>
            <Button type="button">Continuar com a entrega</Button>
          </CarrinhoEntrega>
        </CarrinhoContent>
        <div
          className="overlay"
          onClick={() => {
            setCarrinho(false)
          }}
        ></div>
      </Carrinho>

      <Modal className={modal ? 'visivel' : ''}>
        <ModalContent>
          <img src={foto} alt="Foto da comida" />
          <div>
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <span>Serve:{porcao}</span>
            <Button type="button">{`Adicionar ao carrinho - R$ ${preco}`}</Button>
          </div>
          <BotaoCloseImgContainer>
            <img
              src={close}
              alt="Botao de fechar"
              onClick={() => setModal(false)}
            />
          </BotaoCloseImgContainer>
        </ModalContent>
        <div
          className="overlay"
          onClick={() => {
            setModal(false)
          }}
        ></div>
      </Modal>
    </CardPerfilContainer>
  )
}
