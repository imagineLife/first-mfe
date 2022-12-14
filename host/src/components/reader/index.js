import React, { Fragment } from 'react';
import Typography from '@mui/material/Typography';
import GettingStarted from './gettingStarted';
import EnableModFed from './enableModFed';

export default function Reader() {
  return (
    <Fragment>
      <Typography variant="h1">Getting Started</Typography>
      <GettingStarted />

      <Typography variant="h1">Enabling Module Federation</Typography>
      <EnableModFed />
    </Fragment>
  );
}
