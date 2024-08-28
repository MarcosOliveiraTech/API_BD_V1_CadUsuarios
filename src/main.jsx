// Importações e configuração padrão
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Pages/Home'
// Chamar estilos Globais
import './Pages/Home/index'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/ >
  </StrictMode>
)
