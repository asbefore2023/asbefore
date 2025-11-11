import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';
import { LanguageProvider } from './contexts/LanguageContext';
import { AdminProvider } from './contexts/AdminContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <AdminProvider>
          <LanguageProvider>
            <Routes>
              <Route path="/:lang" element={<App />} />
              <Route path="/" element={<Navigate to="/he" replace />} />
            </Routes>
          </LanguageProvider>
        </AdminProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
