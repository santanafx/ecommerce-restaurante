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
    margin: 0 8px 8px 8px;
    background-color: ${cores.amarelo};
    color: ${cores.vermelho};
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
