import { useState } from 'react'
import { Button } from '../Button'
import {
  BotaoCloseImgContainer,
  CardPerfilContainer,
  CardPerfilImgContainer,
  CardPerfilTitle,
  CardPerfilTitleReviewContainer,
  Modal,
  ModalContent
} from './style'

import close from '../../assets/images/close.png'
import { useDispatch, useSelector } from 'react-redux'
import { add, open } from '../../store/reducers/carrinho'

import { Cardapio } from '../ListCardPerfil/index'

export const CardPerfil = ({
  id,
  foto,
  preco,
  nome,
  descricao,
  porcao
}: Cardapio) => {
  const [modal, setModal] = useState(false)

  const dispatch = useDispatch()

  const addCart = () => {
    dispatch(open())
    dispatch(
      add({
        id,
        foto,
        preco,
        nome,
        descricao,
        porcao
      })
    )
  }

  return (
    <CardPerfilContainer>
      <CardPerfilImgContainer>
        <img src={foto} alt={nome} onClick={() => setModal(true)} />
      </CardPerfilImgContainer>
      <CardPerfilTitleReviewContainer>
        <CardPerfilTitle>{nome}</CardPerfilTitle>
      </CardPerfilTitleReviewContainer>
      <p>{descricao}</p>
      <Button type="button" onClick={addCart}>
        Adicionar ao carrinho
      </Button>
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
