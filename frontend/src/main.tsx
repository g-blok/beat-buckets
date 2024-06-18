import React from 'react';
import ReactDOM from 'react-dom/client';
// import './styles/App.css';
import App from './App';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
