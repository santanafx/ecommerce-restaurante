import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/carrinho'
import close from '../../assets/images/close.png'

import * as S from './style'

import { Button } from '../Button'
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
    <S.CardPerfilContainer>
      <S.CardPerfilImgContainer>
        <img src={foto} alt={nome} onClick={() => setModal(true)} />
      </S.CardPerfilImgContainer>
      <S.CardPerfilTitleReviewContainer>
        <S.CardPerfilTitle>{nome}</S.CardPerfilTitle>
      </S.CardPerfilTitleReviewContainer>
      <p>{descricao}</p>
      <Button type="button" onClick={addCart}>
        Adicionar ao carrinho
      </Button>
      <S.Modal className={modal ? 'visivel' : ''}>
        <S.ModalContent>
          <img src={foto} alt="Foto da comida" />
          <div>
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <span>Serve:{porcao}</span>
            <Button type="button">{`Adicionar ao carrinho - R$ ${preco}`}</Button>
          </div>
          <S.BotaoCloseImgContainer>
            <img
              src={close}
              alt="Botao de fechar"
              onClick={() => setModal(false)}
            />
          </S.BotaoCloseImgContainer>
        </S.ModalContent>
        <div
          className="overlay"
          onClick={() => {
            setModal(false)
          }}
        ></div>
      </S.Modal>
    </S.CardPerfilContainer>
  )
}
