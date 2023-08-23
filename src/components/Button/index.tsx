import { ButtonContainer, ButtonFilter } from './style'

type Props = {
  type: 'button' | 'submit'
  onClick?: () => void
  children: string
}

export const Button = ({ type, onClick, children }: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonContainer type="button" onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  return <ButtonFilter>{children}</ButtonFilter>
}
