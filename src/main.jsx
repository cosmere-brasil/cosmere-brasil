import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Header } from './components/Header'
import { Main } from './components/Main/Main'
import { CharacterCard } from './components/CartaoDePersonagem/CharacterCard.jsx'

import  tarot_kaladin  from './assets/images/personagens/tarot_kaladin.jpg'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Main /> 
    <CharacterCard 
      nome_do_personagem='Kaladin'
      imagem_do_personagem={tarot_kaladin}
      />
  </StrictMode>,
)
