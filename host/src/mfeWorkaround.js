import React from 'react';
import ReactDomClient from 'react-dom/client';
import App from './app';

const MFE_PARENT_DIV = 'mfe-root';
const rootElement = document.getElementById(MFE_PARENT_DIV);

if (rootElement) {
  const root = ReactDomClient.createRoot(rootElement);
  root.render(<App />);
}
