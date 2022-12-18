import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
const NavBar = React.lazy(() => import('nav/Nav'));

export default function DefaultLayout({ window, children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <React.Suspense fallback={<span />}>
        <NavBar window={window} />
      </React.Suspense>
      <Box component="main" sx={{ p: 3 }}>
        {/* "spacer" toolabr to "push down" content top to below the "real" toolbar in the NavBar */}
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
