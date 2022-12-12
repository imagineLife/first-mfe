import React, { Fragment } from 'react';
import { Typography } from '@mui/material';

export default function Section({ sx, h1, h2, h3, h4, h5, h6, children }) {
  return (
    <Fragment>
      {h1 && (
        <Typography variant="h1" sx={{ ...sx }}>
          {h1}
        </Typography>
      )}
      {h2 && (
        <Typography variant="h2" sx={{ ...sx }}>
          {h2}
        </Typography>
      )}
      {h3 && (
        <Typography variant="h3" sx={{ ...sx }}>
          {h3}
        </Typography>
      )}
      {h4 && (
        <Typography variant="h4" sx={{ ...sx }}>
          {h4}
        </Typography>
      )}
      {h5 && (
        <Typography variant="h5" sx={{ ...sx }}>
          {h5}
        </Typography>
      )}
      {h6 && (
        <Typography variant="h6" sx={{ ...sx }}>
          {h6}
        </Typography>
      )}
      {children}
    </Fragment>
  );
}
