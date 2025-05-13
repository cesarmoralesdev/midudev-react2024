import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App';
import './index.css'

//renderiza en el index, el componente App en modo estricto (StrictMode) para detectar posibles errores en la aplicación y mostrarlos en la consola de desarrollador de tu navegador
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App  />
)