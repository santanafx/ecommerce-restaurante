import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cardapio } from '../../components/ListCardPerfil'

type CartState = {
  items: Cardapio[]
  isOpen: boolean
  isEntregaOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isEntregaOpen: false
}

const cartSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      const comida = state.items.find((item) => item.id === action.payload.id)
      if (!comida) {
        state.items.push(action.payload)
      } else {
        alert('A comida já foi adicionada')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    entregaOpen: (state) => {
      state.isEntregaOpen = true
    },
    entregaClose: (state) => {
      state.isEntregaOpen = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, remove, open, close, entregaOpen, entregaClose, clear } =
  cartSlice.actions
export default cartSlice.reducer
