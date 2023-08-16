import { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelho: '#E66767',
  amarelo: '#fff8f1',
  branco: '#fff'
}

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: 'Roboto', sans-serif;
}

body{
  background-color: ${cores.amarelo}
}
`
