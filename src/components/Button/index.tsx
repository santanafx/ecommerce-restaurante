import { ButtonContainer } from './style'

type Props = {
  type: 'button'
  title: string
  onClick?: () => void
  children: string
}

export const Button = ({ type, title, onClick, children }: Props) => {
  return (
    <ButtonContainer type="button" title={title} onClick={onClick}>
      {children}
    </ButtonContainer>
  )
}
