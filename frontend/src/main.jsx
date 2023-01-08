import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import NotFound from './NotFound'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App slider={true} />} />
      <Route path='triangle' element={<App slider={false} />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)
