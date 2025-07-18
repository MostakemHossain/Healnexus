import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './components/Login.tsx'

import SignUpPage from './components/Sign-up.tsx'
import NotFoundPage from './components/NotFound.tsx'
import ServicesPage from './components/ServicePage.tsx'
import ServiceDetail from './components/ServiceDetails.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/:id" element={<ServiceDetail />} />
      <Route path="*" element={<NotFoundPage />} />       

    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
