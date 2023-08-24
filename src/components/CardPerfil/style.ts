import { styled } from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { ButtonContainer } from '../Button/style'

export const CardPerfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.red};
  position: relative;
  width: 338px;

  p {
    font-size: 14px;
    color: ${colors.yellow};
    padding: 0 8px;
    margin-bottom: 16px;
  }

  ${ButtonContainer} {
    margin: auto 8px 8px 8px;
    background-color: ${colors.yellow};
    color: ${colors.red};
    font-weight: 700;
    font-size: 14px;
    line-height: 16.41px;
    padding: 8px 14px;
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
    color: ${colors.red};
  }

  div {
    display: flex;
    align-items: center;
  }
`

export const CardPerfilTitle = styled.h2`
  color: ${colors.yellow};
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
  background-color: ${colors.red};
  max-width: 1024px;
  position: relative;
  z-index: 1;
  padding: 32px;

  h2 {
    font-weight: bold;
    font-size: 18px;
    line-height: 21.09px;
    color: ${colors.yellow};
    margin-bottom: 16px;
  }

  p {
    color: ${colors.yellow};
    padding: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }

  span {
    display: block;
    color: ${colors.yellow};
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

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;

    img {
      margin-bottom: 8px;
    }
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
