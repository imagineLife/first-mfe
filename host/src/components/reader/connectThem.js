import React, { Fragment } from 'react';
import Section from './section';

import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
// import { Nav } from 'nav/Nav'

export default function EnableModFed() {
  return (
    <Section h3="Connect The Two With the ModuleFederationPlugin" sx={{ p: 3 }}>
      <Typography variant="body1">
        Here, the host app is enabled and "listening" for content from the sibling federated module.
        The ModuleFederationPlugin config needs to be adjusted on boths apps.
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Setup the Nav To Expose Itself"
            secondary={
              <Fragment>
                <p>
                  The Nav Module will now be able to be consumed by other federated modules. In the
                  nav's webpack config, inside the ModuleFederationPlugin config object, change the
                  "exposes" key contents to something like this:
                </p>
                <code
                  style={{ whiteSpace: 'pre' }}
                >{`exposes: { './Nav': './src/components/Nav' },`}</code>
                <p>
                  Doing this will make this Nav module exposable. Here, the string that will
                  represent this module will be "nav/Nav" - a combination of the module's name{' '}
                  <i>(declared in the moduleFederationPlugin "name" field)</i> and exposed key in
                  this "exposes" object. Curious minds might notice that this single federated
                  module can expose many modules with new keys! Interesting stuff here.
                </p>
              </Fragment>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary="Setup the Host To Consume The Nav Module"
            secondary={'{counter: `counter@$localhost:8081/remoteEntry.js`}'}
          />
        </ListItem>
      </List>
      {/* <Nav /> */}
    </Section>
  );
}
