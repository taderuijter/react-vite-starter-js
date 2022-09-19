import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AppContext from './store/AppContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>
)
