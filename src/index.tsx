import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';  // ✅ Import HashRouter
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter >  {/* ✅ Wrap App in HashRouter */}
      <App />
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
