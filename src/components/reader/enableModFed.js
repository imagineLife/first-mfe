import React, { Fragment } from 'react';
import Section from './section';
import { Typography } from '@mui/material';

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
        are built, bundled, and deployed.
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
  name: THIS_FED_MOD.NAME,
  filename: THIS_FED_MOD.FILENAME,
  remotes: {},
  exposes: {},
  shared: {
    ...deps,
    ...eagerDepsObj,
  },
}),`}</code>
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

{
  /* <Section h3="Updating The Module" sx={{ p: 3 }}>
  <Typography variant="body1">
    In this example, the nav gets broken up into a federated module. Perhaps nav has become super
    complex and there is enough work and value to put some unique individuals on a new "nav" team.
  </Typography>
</Section>; */
}
