import { useParams } from 'react-router-dom'
import { ListCardPerfil } from '../../components/ListCardPerfil'
import { PerfilHeader } from '../../components/PerfilHeader'

export const Perfil = () => {
  const { tipo } = useParams()
  return (
    <>
      <PerfilHeader tipo={tipo} />
      <ListCardPerfil tipo={tipo} />
    </>
  )
}
