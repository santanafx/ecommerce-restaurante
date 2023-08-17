import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer } from './components/Footer'
import { GlobalCss } from './styles'
import { Home } from './pages/Home'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
)

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
