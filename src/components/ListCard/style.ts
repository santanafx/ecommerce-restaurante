import { styled } from 'styled-components'

export const ListCardContainer = styled.main`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 90%;
`

export const ListCardGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
`
