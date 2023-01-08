import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import NotFound from './NotFound'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App type={'tree'} />} />
      <Route path='triangle' element={<App type={'triangle'} />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)
