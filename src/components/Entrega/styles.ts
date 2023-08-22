import { styled } from 'styled-components'
import { cores } from '../../styles'
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
  background-color: ${cores.vermelho};
  height: 100%;
`

export const EntregaForm = styled.form`
  margin: 32px 8px 0 8px;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 16px;
    font-weight: 700;
    color: ${cores.amarelo};
    margin-bottom: 16px;
  }

  label {
    font-size: 14px;
    font-weight: 700;
    color: ${cores.amarelo};
    margin-bottom: 8px;
  }

  input {
    background-color: ${cores.amarelo};
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
    border: none;
    padding: 8px;
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
`

export const EntregaButtonContainer = styled.div`
  margin-top: 24px;

  ${ButtonContainer} {
    width: 100%;
    margin: 0;
    background-color: ${cores.amarelo};
    color: ${cores.vermelho};
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
  }
`
