import { styled } from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/style'

export const EntregaContainer = styled.div`
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

export const EntregaContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  min-width: 360px;
  max-width: 360px;
  background-color: ${colors.red};
  height: 100%;

  form {
    margin: 32px 8px 0 8px;

    .invisivel {
      display: none;
    }

    section {
      display: flex;
      flex-direction: column;

      h2 {
        font-size: 16px;
        font-weight: 700;
        color: ${colors.yellow};
        margin-bottom: 16px;
      }

      label {
        font-size: 14px;
        font-weight: 700;
        color: ${colors.yellow};
        margin-bottom: 8px;
      }

      input {
        background-color: ${colors.yellow};
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 8px;
        border: none;
        padding: 8px;

        &.error {
          border: 1px solid red;
        }
      }

      .cep-numero {
        display: flex;
        justify-content: space-between;

        div {
          display: flex;
          flex-direction: column;
          width: 155px;
        }
      }

      .cartao-cvv {
        display: flex;
        justify-content: space-between;

        :first-child {
          width: 228px;
        }

        div {
          display: flex;
          flex-direction: column;
          width: 87px;
        }
      }

      .mesVencimento-anoVencimento {
        display: flex;
        justify-content: space-between;

        div {
          display: flex;
          flex-direction: column;
          width: 155px;
        }
      }

      p {
        width: 344px;
        margin-bottom: 16px;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: ${colors.yellow};
      }
    }
  }
`

export const EntregaButtonContainer = styled.div`
  margin-top: 24px;

  ${ButtonContainer} {
    width: 100%;
    margin: 0;
    background-color: ${colors.yellow};
    color: ${colors.red};
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
  }
`
