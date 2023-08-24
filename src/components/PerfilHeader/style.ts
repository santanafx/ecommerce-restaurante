import { styled } from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const PerfilHeaderContainer = styled.header`
  width: 100%;
  height: 180px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  span {
    font-weight: bold;
    font-size: 18px;
    color: ${colors.red};
    line-height: 21.09px;
  }

  img {
    position: absolute;
    top: 57.5px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`

export const PerfilHeaderComida = styled.div`
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;

  h3 {
    position: absolute;
    top: 25px;
    left: 170px;
    color: ${colors.white};
    font-size: 32px;
    line-height: 37.5px;
    font-weight: 100;
  }

  h2 {
    position: absolute;
    top: 214.75px;
    left: 170px;
    color: ${colors.white};
    font-size: 32px;
    font-weight: bold;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 300px;

    h3 {
      top: 10px;
      left: 50px;
    }

    h2 {
      top: 214.75px;
      left: 50px;
    }
  }
`
