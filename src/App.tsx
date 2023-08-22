import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer } from './components/Footer'
import { GlobalCss } from './styles'
import { Home } from './pages/Home'
import { Perfil } from './pages/Perfil'
import { store } from './store'
import { Carrinho } from './components/Carrinho'
import { Entrega } from './components/Entrega'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil/:tipo" element={<Perfil />} />
  </Routes>
)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
        <Carrinho />
        <Entrega />
      </BrowserRouter>
    </Provider>
  )
}

export default App
