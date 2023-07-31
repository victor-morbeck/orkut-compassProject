import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';

const rootElement: HTMLElement | null = document.getElementById('root');
if (rootElement) 
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
