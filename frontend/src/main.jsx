import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Prominent browser DevTools notice
console.error(
  "%c⚠️ [ACCESS DENIED] You cannot modify or view code without permission from repo owner.\nPlatform: LearnProof AI | Copyright (c) 2026 Kakade Avishkar",
  "color: #ef4444; font-size: 16px; font-weight: bold; background: #0f172a; padding: 10px 18px; border-radius: 8px; border: 2px solid #ef4444;"
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

