import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import { EmailProvider } from './context/EmailContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EmailProvider>
      <App />
    </EmailProvider>
  </StrictMode>,
)
