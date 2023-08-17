import { styled } from 'styled-components'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${cores.vermelho};
  color: ${cores.amarelo};
  font-size: 14px;
  text-align: center;
  border: none;
  padding: 3px 8px;
  cursor: pointer;
`

export const ButtonFilter = styled.span`
  background-color: ${cores.vermelho};
  color: ${cores.amarelo};
  font-size: 12px;
  line-height: 14.06px;
  text-align: center;
  border: none;
  padding: 6px 12px;
`
