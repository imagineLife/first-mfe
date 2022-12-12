import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app'

const MFE_PARENT_DIV = 'mfe-root';
const rootElement = document.getElementById(MFE_PARENT_DIV);

if (rootElement) {
  const root = createRoot(rootElement);
root.render(<App />)
}
