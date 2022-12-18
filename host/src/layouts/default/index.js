import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Nav as NavBar } from 'nav/Nav';

export default function DefaultLayout({ window, children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar window={window} />
      <Box component="main" sx={{ p: 3 }}>
        {/* "spacer" toolabr to "push down" content top to below the "real" toolbar in the NavBar */}
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
