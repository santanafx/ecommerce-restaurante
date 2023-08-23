import { styled } from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  width: 100%;
  height: 298px;
  background-color: ${colors.darkYellow};
  display: flex;
  flex-direction: column;
  position: relative;

  p {
    font-size: 10px;
    line-height: 11.72px;
    text-align: center;
    max-width: 480px;
    margin: 80px auto 40px auto;
    color: ${colors.red};
  }
`

export const FooterImagemLogo = styled.img`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translate(-50%, 0);
`

export const FooterContainerRedes = styled.div`
  margin-top: 130px;
  display: flex;
  justify-content: center;

  img {
    margin: 0 4px;
    cursor: pointer;
  }
`
