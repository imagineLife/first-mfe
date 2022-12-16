import React, { Fragment } from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

export default function Section({ sx, h1, h2, h3, h4, h5, h6, children }) {
  return (
    <Box sx={{...sx}}>
      {h1 && (
        <Typography variant="h1">
          {h1}
        </Typography>
      )}
      {h2 && (
        <Typography variant="h2">
          {h2}
        </Typography>
      )}
      {h3 && (
        <Typography variant="h3">
          {h3}
        </Typography>
      )}
      {h4 && (
        <Typography variant="h4">
          {h4}
        </Typography>
      )}
      {h5 && (
        <Typography variant="h5">
          {h5}
        </Typography>
      )}
      {h6 && (
        <Typography variant="h6">
          {h6}
        </Typography>
      )}
      {children}
    </Box>
  );
}
