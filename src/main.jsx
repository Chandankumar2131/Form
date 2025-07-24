import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import HomeWork from './HomeWork'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
    // <HomeWork/>
  // {/* </StrictMode>, */}
)
