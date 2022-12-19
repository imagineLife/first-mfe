import React, { Fragment } from 'react';
import Section from './section';

import { Typography } from '@mui/material';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';

export default function BundlingForPod() {
  return (
    <Section h3="Bundling For Production" sx={{ p: 3 }}>
      <Typography variant="body1">
        Traditional Single-Page-Applications built with react and Webpack are a bit less to deal
        with than this type of federated module setup. This setups creates 2 sets of "bundled" code,
        one for the host and one for the remote, rather than one bundle for the single app.
      </Typography>

      <Section h4="Bundling The Host" sx={{ p: 3 }}>
        <Typography variant="body1">
          The host gets bundled like a traditional single-page-application. Running something like{' '}
          <code>{`webpack --mode=production`}</code>, maybe assigned to an npm command (
          <i>
            <code>{`npm run build`}</code>
          </i>
          ) will convert the code to production-ready output into a "dist" directory.
        </Typography>
      </Section>
    </Section>
  );
}
