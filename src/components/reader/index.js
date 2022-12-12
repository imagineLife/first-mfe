import React, { Fragment } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function Section({ sx, h1, h2, h3, h4, h5, h6, children }) { 
  return (
    <Fragment>
      {h1 && <Typography variant="h1" sx={{...sx}}>{h1}</Typography>}
      {h2 && <Typography variant="h2" sx={{...sx}}>{h2}</Typography>}
      {h3 && <Typography variant="h3" sx={{...sx}}>{h3}</Typography>}
      {h4 && <Typography variant="h4" sx={{...sx}}>{h4}</Typography>}
      {h5 && <Typography variant="h5" sx={{...sx}}>{h5}</Typography>}
      {h6 && <Typography variant="h6" sx={{...sx}}>{h6}</Typography>}
      {children}
    </Fragment>
  );
}

function GettingStarted() {
  return (
    <Section h2="Initial Setup">
      <Section h3="Dependencies" sx={{ p: 3 }}>
        <Typography variant="body1">
          The app is setup without the modulke federation, a "vanilla" bare-bones react-based
          frontend project.
        </Typography>
        <Typography variant="body1">
          The dependencies are relatively simple: react, webpack, babel, and material ui{' '}
          <i>(and all of their dependencies)</i>:
        </Typography>
        <code style={{ whiteSpace: 'pre' }}>
          {`"dependencies": {
    "@babel/core": "^7.20.5",
    "@babel/preset-env": "^7.20.2",
    "@babel/preset-react": "^7.18.6",
    "@emotion/react": "^11.10.5",
    "@emotion/styled": "^11.10.5",
    "@mui/icons-material": "^5.10.16",
    "@mui/material": "^5.10.17",
    "babel-loader": "^9.1.0",
    "html-webpack-plugin": "^5.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "webpack": "^5.75.0",
    "webpack-cli": "^5.0.1"
  }`}
        </code>
      </Section>

      <Section h3="UI Parts" sx={{ p: 3 }}>
        <Typography variant="body1">
          <b>THE APP</b> starts with a layout and this text content.
        </Typography>
        <Typography variant="body1">
          <b>THE LAYOUT</b> consists of a wrapper around a nav and some content.
        </Typography>
        <Typography variant="body1">
          <b>THE NAV</b> is the most complex part. There are a bunch of more components in the nav
          than listed here, but the ux outcome of the responsive nav is
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="An AppBar"
              secondary="The Sandwich Icon in mobile mode and the toolbar showing 3 menu items (made up items here)"
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="A Drawer" secondary={'The "open" drawer in mobile mode'} />
          </ListItem>
        </List>
        <Typography variant="body1">
          <b>THE TEXT</b> content is served as part of a <code>{`<Reader />`}</code> component,
          served as a child of the <code>{`<DefaultLayout />`}</code> component
        </Typography>
        <Typography variant="h4">
          <Typography variant="body1">
            The <code>{`<App />`}</code> puts the layout and the Reader together in a small file
            that reads <i>(note the "window" gets passed around for a detail)</i>
          </Typography>
          <Typography variant="body1">
            <code style={{ whiteSpace: 'pre' }}>{`export default function App({window}) {
  return (
    <DefaultLayout window={window}>
      <Reader />
    </DefaultLayout>
  );
}`}</code>
          </Typography>
        </Typography>
      </Section>
    </Section>
  );
}

export default function Reader() {
  return (
    <Fragment>
      <Typography variant="h1">Getting Started</Typography>
      <GettingStarted />
    </Fragment>
  );
}
