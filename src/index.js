import React from 'react';
import { createRoot } from 'react-dom/client';
const MFE_PARENT_DIV = 'mfe-root';
function Header() {
  return <h1>Init Header Here</h1>;
}


const rootElement = document.getElementById(MFE_PARENT_DIV);
if (rootElement) {
  const root = createRoot(rootElement);
root.render(<Header />)
}
