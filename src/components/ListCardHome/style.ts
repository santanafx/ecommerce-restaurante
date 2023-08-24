import { styled } from 'styled-components'
import { breakpoints } from '../../styles'

export const ListCardContainer = styled.main`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 90%;
  margin-bottom: 120px;
`

export const ListCardGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
