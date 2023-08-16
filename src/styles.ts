import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: 'white',
  preto: 'black',
  cinza: 'grey'
}

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
`
