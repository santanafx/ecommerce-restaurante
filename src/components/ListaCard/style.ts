import { styled } from 'styled-components'

export const Container = styled.main`
  display: flex;
  justify-content: center;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
`
