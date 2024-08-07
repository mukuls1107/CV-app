import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { StrictMode } from 'react';
// import './index.css'


let link = document.createElement("link")
link.href = "https://fonts.googleapis.com/css2?family=Fira+Code&display=swap";
link.rel = "stylesheet"

document.head.appendChild(link)

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
