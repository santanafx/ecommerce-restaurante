import { styled } from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer, ButtonFilter } from '../Button/style'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${cores.vermelho};
  position: relative;
  max-width: 472px;

  img {
    max-width: 100%;
    display: block;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: ${cores.vermelho};
    padding: 0 8px;
    margin-bottom: 16px;
  }

  ${ButtonContainer} {
    margin: 0 0 8px 8px;
  }
`

export const CardContainerFilter = styled.div`
  position: absolute;
  z-index: 1;
  top: 16px;
  right: 16px;

  ${ButtonFilter} {
    margin-left: 8px;
  }
`

export const CardTitleReviewContainer = styled.div`
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

export const CardTitle = styled.h2`
  color: ${cores.vermelho};
  font-size: 18px;
  line-height: 21.09px;
`
