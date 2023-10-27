import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import sum from '@/test';

var a = sum(2,3)
console.log(a)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

