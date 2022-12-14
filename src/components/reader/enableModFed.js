import React, { Fragment } from 'react';
import Section from './section';

import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function EnableModFed() {
  return (
    <Section h3="Updating The Host App" sx={{ p: 3 }}>
      <Typography variant="body1">
        Enabling{' '}
        <a href="https://webpack.js.org/concepts/module-federation/" target="none">
          Module Federation
        </a>{' '}
        involves adjusting the "host" app to work with module federation. Thist mostly involves
        tinkering with Webpack config, as module federation affects how parts of an app like this
        are built, bundled, and deployed. <i>(NOTE: the docs are referenced throughout this doc)</i>
      </Typography>
      <Typography variant="body1">
        <b>The "Host" App</b> gets introduced, where the app becomes able to "consume" code produced
        by another module. The host app is "told" to look for a specific named js file (
        <i>in production</i>) where that named js file is responsible for "taking over" and "owning"
        the federated module, the Micro Frontend.
      </Typography>
      <Typography variant="body1">
        <b>A New Plugin</b> gets introduced into the webpack plugins array configuration: the{' '}
        <a href="https://webpack.js.org/concepts/module-federation" target="none">
          <code>ModuleFederationPlugin</code>
        </a>
        . <br />
        The plugin can be imported into the webpack config with something like{' '}
        <code>{`const { ModuleFederationPlugin: ModFedPlugin } = require("webpack").container`}</code>
        . <br />
        The webpack config plugins array can get something like this added to it:
      </Typography>
      <code style={{ whiteSpace: 'pre' }}>{` new ModFedPlugin({
  name: 'the-host-app',
  filename: 'remoteEntry.js',
  remotes: {},
  exposes: {},
  shared: {
    ...deps,
    ...eagerDepsObj,
  },
}),`}</code>
      <Typography>
        <b>name</b> is a friendly name for this host module.
      </Typography>
      <Typography>
        <b>filename</b> is the filename for this module's{' '}
        <i>(now as a "host" app or "container" app)</i> relative path inside the `output.path`
        directory
      </Typography>
      <Typography>
        <b>remotes</b> are objects of other modules that this module consumes. Right now there are
        no entries there, but this will get populated once a part of this app gets broken out into a
        separate micro-frontend Federated Module.
      </Typography>
      <Typography>
        <b>exposes</b> is an obj of modules that should be exposed by this module. When this has
        content, each key is used as public name.{' '}
        <i>(otherwise public name is automatically inferred from request)</i>
      </Typography>
      <Typography>
        <b>shared</b> is used here to describe which node_modules are "shared". This is added
        primarily due to a{' '}
        <a
          href="https://webpack.js.org/concepts/module-federation/#uncaught-error-shared-module-is-not-available-for-eager-consumption"
          target="none"
        >
          Known Error-Driven-Development Documentation note
        </a>{' '}
        by the webpack team, where eager module loading matters.
      </Typography>

      <Section h4="Config Impact On Production Bundle" sx={{ p: 4 }}>
        <Typography variant="body1">
          A Few things happen when adding the module federation plugin:
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="A Larger Index File"
              secondary="Right now, the index.js file is bigger - beyond the alert of webpack & after running 'npm run build' an error shows in the terminal: WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance. Entrypoints: index (662 KiB)"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary=""
              secondary=""
            />
          </ListItem>
        </List>
      </Section>
      <Typography variant="body2">
        <a href="https://scriptedalchemy.medium.com/" target="none">
          Zachary Jackson
        </a>
        , the creator of Module federation using webpack{' '}
        <i>(along with Marais Rossouw and Tobias Koppers)</i>, has{' '}
        <a
          href="https://levelup.gitconnected.com/micro-frontend-architecture-replacing-a-monolith-from-the-inside-out-61f60d2e14c1"
          target="none"
        >
          a
        </a>{' '}
        <a
          href="https://medium.com/swlh/webpack-5-module-federation-a-game-changer-to-javascript-architecture-bcdd30e02669"
          target="none"
        >
          bunch
        </a>{' '}
        <a
          href="https://scriptedalchemy.medium.com/module-federation-how-do-we-create-unit-tests-for-it-bd0d73c999bc"
          target="none"
        >
          of
        </a>{' '}
        <a
          href="https://scriptedalchemy.medium.com/server-side-rendering-tactics-for-federated-applications-765ec675d188"
          target="none"
        >
          great
        </a>{' '}
        <a
          href="https://scriptedalchemy.medium.com/when-should-you-leverage-module-federation-and-how-2998b132c840"
          target="none"
        >
          writings
        </a>{' '}
        on the topic.
      </Typography>
    </Section>
  );
}
