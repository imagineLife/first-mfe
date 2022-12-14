import React, { Fragment } from 'react';
import Section from './section';

import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function EnableModFed() {
  return (
    <Section h3="Connect The Two With the ModuleFederationPlugin" sx={{ p: 3 }}>
      <Typography variant="body1">Here, the host app is enabled and "listening" for content from the sibling federated module.</Typography>
      {/* <Typography variant="body1">
        <List>
          <ListItem>
            <ListItemText
              primary="Migrate The Host Code To A New SubDirectory"
              secondary={`In this case the repo will now have 2 "sub" repos in it: one for the "host" app, and one for the "remote" that the host app will consume. Create a new dir in the repo called "host" and move as many files into that directory as needed to make it run: src code, webpack+babel configs, npm files, etc.`}
            />
          </ListItem>
        </List>
      </Typography> */}
    </Section>
  );
}
