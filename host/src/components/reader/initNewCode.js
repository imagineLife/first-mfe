import React, { Fragment } from 'react';
import Section from './section';

import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function EnableModFed() {
  return (
    <Section h3="Initializing Two Projects" sx={{ p: 3 }}>
      <Typography variant="body1">
        Here, another single-page-app gets made. In the longer run this will contain the federated
        module that gets consumed by the "host" app.
      </Typography>
      <Typography variant="body1">
        <List>
          <ListItem>
            <ListItemText
              primary="Migrate The Host Code To A New SubDirectory"
              secondary={`In this case the repo will now have 2 "sub" repos in it: one for the "host" app, and one for the "remote" that the host app will consume. Create a new dir in the repo called "host" and move as many files into that directory as needed to make it run: src code, webpack+babel configs, npm files, etc.`}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Create The Remote"
              secondary={`The "remote" entry, the module being federated here, will be a sibling directory of the host app. For simplicity as a proof-of-concept here, the majority of the host app can be cloned to a sibling repo - I'll call it NavApp. Change the src of the new project to return a super simple component without the majority of the code from the host - something like a "Nav = () => <div id="nav">Nav Here</div>".`}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Set The Remote As A Skeletop SPA"
              secondary={
                <React.Fragment>
                  <p>
                    Return a simple div as the app - minimal ui code to start. The focus at this
                    point is to begin setting up the MFE communication between the two repos. The UI
                    for the nav will come shortly!
                  </p>
                  <p>
                    Update the dev port to run on: the host app, in my case, runs on 8080. I set
                    this new repo to run on 8081.
                  </p>
                  <p>
                    Adjust the "name" of the ModuleFederationPlugin config object - i set this to be
                    named "nav" for now.
                  </p>
                  <p>
                    Validate that the new app can be served from the new port (
                    <i>here at localhost:8081</i>), and that the <code>npm run build</code> command
                    puts a bunch of js/html into the dist folder in the repo. With this, the remote
                    is a skeleton ready to connect to the host app!
                  </p>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Typography>
    </Section>
  );
}
