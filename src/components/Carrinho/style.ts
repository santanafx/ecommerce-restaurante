import { styled } from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/style'

export const CarrinhoContainer = styled.div`
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
  background-color: ${colors.red};
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
    color: ${colors.yellow};
  }

  ${ButtonContainer} {
    width: 100%;
    margin: 0;
    background-color: ${colors.yellow};
    color: ${colors.red};
    font-size: 14px;
    font-weight: 700;
  }
`

export const CarrinhoCard = styled.div`
  display: flex;
  padding: 8px;
  width: 344px;
  margin: 16px auto;
  background-color: ${colors.yellow};
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
      color: ${colors.red};
      margin-bottom: 16px;
    }

    span {
      font-weight: 400;
      font-size: 14px;
      color: ${colors.red};
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
