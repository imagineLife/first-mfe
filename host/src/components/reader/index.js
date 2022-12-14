import React, { Fragment } from 'react';
import Typography from '@mui/material/Typography';
import GettingStarted from './gettingStarted';
import EnableModFed from './enableModFed';
import InitNewCode from './initNewCode';
import ConnectThem from './connectThem';

export default function Reader() {
  return (
    <Fragment>
      <Typography variant="h1">Getting Started</Typography>
      <GettingStarted />

      <Typography variant="h1">Enabling Module Federation</Typography>
      <EnableModFed />
      <InitNewCode />
      <ConnectThem />
    </Fragment>
  );
}
