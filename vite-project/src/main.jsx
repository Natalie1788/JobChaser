import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './components/ThemeContext.jsx'
import { AuthProvider } from './AuthContext.jsx'
import store from "./store/store.js"
import {Provider} from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <AuthProvider>
    <ThemeProvider>
    <App />
    </ThemeProvider>
    </AuthProvider>
    </Provider>
  </React.StrictMode>,
)
