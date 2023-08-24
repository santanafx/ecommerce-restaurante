import { createGlobalStyle } from 'styled-components'

export const colors = {
  red: '#E66767',
  yellow: '#fff8f1',
  white: '#fff',
  darkYellow: '#ffebd9'
}

export const breakpoints = {
  tablet: '768px'
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
  background-color: ${colors.yellow}
}
`
