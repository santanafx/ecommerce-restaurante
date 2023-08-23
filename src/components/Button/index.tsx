import * as S from './style'

type Props = {
  type: 'button' | 'submit'
  onClick?: () => void
  children: string
}

export const Button = ({ type, onClick, children }: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.ButtonContainer type="button" onClick={onClick}>
        {children}
      </S.ButtonContainer>
    )
  }

  return <S.ButtonFilter>{children}</S.ButtonFilter>
}
