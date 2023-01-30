import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App'
import './styles/index.scss'
import './styles/global.scss'
import './styles/vars.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
