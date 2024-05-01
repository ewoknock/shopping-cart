import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router'
import './styles/application.sass.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
