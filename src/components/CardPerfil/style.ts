import { styled } from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/style'

export const CardPerfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${cores.vermelho};
  position: relative;
  width: 338px;

  p {
    font-size: 14px;
    color: ${cores.amarelo};
    padding: 0 8px;
    margin-bottom: 16px;
  }

  ${ButtonContainer} {
    margin: auto 8px 8px 8px;
    background-color: ${cores.amarelo};
    color: ${cores.vermelho};
    font-weight: 700;
    font-size: 14px;
    line-height: 16.41px;
    padding: 8px 14px;
  }
`

export const Carrinho = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.73);
  }
`

export const CarrinhoContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  min-width: 360px;
  background-color: ${cores.vermelho};
  height: 100%;
`

export const CarrinhoEntrega = styled.div`
  margin: 40px 8px 0 8px;
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  span {
    font-weight: 700;
    font-size: 14px;
    line-height: 16.41px;
    color: ${cores.amarelo};
  }

  ${ButtonContainer} {
    width: 100%;
    margin: 0;
  }
`

export const CarrinhoCard = styled.div`
  display: flex;
  padding: 8px;
  width: 344px;
  margin: 16px auto;
  background-color: ${cores.amarelo};
  position: relative;

  img {
    object-fit: cover;
    height: 80px;
    width: 80px;
  }

  div {
    margin-left: 8px;
    h2 {
      font-weight: bold;
      font-size: 18px;
      color: ${cores.vermelho};
      margin-bottom: 16px;
    }

    span {
      font-weight: 400;
      font-size: 14px;
      color: ${cores.vermelho};
    }
  }
`

export const BotaoLixeiraImgContainer = styled.div`
  position: absolute;
  right: 8px;
  bottom: 8px;

  img {
    width: 100%;
    object-fit: cover;
    max-height: 16px;
    min-height: 16px;
    margin-right: 0;
    cursor: pointer;
  }
`

export const CardPerfilImgContainer = styled.div`
  display: flex;
  justify-content: center;
  img {
    margin: 8px;
    width: 100%;
    object-fit: cover;
    max-height: 167px;
    min-height: 167px;
    cursor: pointer;
  }
`

export const CardPerfilTitleReviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;

  span {
    margin-right: 8px;
    font-size: 18px;
    line-height: 21.09px;
    font-weight: bold;
    color: ${cores.vermelho};
  }

  div {
    display: flex;
    align-items: center;
  }
`

export const CardPerfilTitle = styled.h2`
  color: ${cores.amarelo};
  font-size: 18px;
  line-height: 21.09px;
  margin-bottom: 8px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  display: flex;
  background-color: ${cores.vermelho};
  max-width: 1024px;
  position: relative;
  z-index: 1;
  padding: 32px;

  h2 {
    font-weight: bold;
    font-size: 18px;
    line-height: 21.09px;
    color: ${cores.amarelo};
    margin-bottom: 16px;
  }

  p {
    color: ${cores.amarelo};
    padding: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }

  span {
    display: block;
    color: ${cores.amarelo};
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  img {
    width: 100%;
    object-fit: cover;
    max-height: 280px;
    min-height: 280px;
    margin-right: 24px;
  }

  ${ButtonContainer} {
    margin: auto 0 0 0;
  }
`
export const BotaoCloseImgContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;

  img {
    width: 100%;
    object-fit: cover;
    max-height: 16px;
    min-height: 16px;
    margin-right: 0;
    cursor: pointer;
  }
`
