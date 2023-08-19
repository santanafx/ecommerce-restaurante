import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Comidas } from '../../components/CardPerfil'

type CartState = {
  items: Comidas[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { close } = cartSlice.actions
export default cartSlice.reducer
