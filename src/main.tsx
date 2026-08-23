import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Archivo variable — one file covers weight 100-900 and the width axis, which
// is what the wordmark and display headings use (font-stretch: 125%).
import '@fontsource-variable/archivo/wdth.css'
// IBM Plex Mono carries anything countable: labels, figures, addresses.
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
