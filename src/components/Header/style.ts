import { styled } from 'styled-components'
import { colors } from '../../styles'

export const HeaderImage = styled.header`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 80px;
  position: relative;

  img {
    position: absolute;
    top: 57.5px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  p {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 36px;
    line-height: 42.19px;
    text-align: center;
    font-weight: bold;
    color: ${colors.red};
  }
`
