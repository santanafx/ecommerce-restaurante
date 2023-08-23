import { styled } from 'styled-components'
import { colors } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${colors.red};
  color: ${colors.yellow};
  font-size: 14px;
  text-align: center;
  border: none;
  padding: 3px 8px;
  cursor: pointer;
`

export const ButtonFilter = styled.span`
  background-color: ${colors.red};
  color: ${colors.yellow};
  font-size: 12px;
  line-height: 14.06px;
  text-align: center;
  border: none;
  padding: 6px 12px;
  cursor: pointer;
`
