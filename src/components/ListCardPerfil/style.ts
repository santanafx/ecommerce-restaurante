import { styled } from 'styled-components'
import { breakpoints } from '../../styles'

export const ListCardPerfilContainer = styled.main`
  display: flex;
  justify-content: center;
  margin: 56px auto 0 auto;
  width: 90%;
  margin-bottom: 120px;
`

export const ListCardPerfilGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
