import React, { Fragment } from 'react';
import Section from './section';
import { Typography } from '@mui/material';

export default function EnableModFed() {
  return (
    <Section h2="Initial Setup">
      <Section h3="Updating The Host App" sx={{ p: 3 }}>
        <Typography variant="body1">
          Enabling Module Federation involves adjusting the "host" app to work with module
          federation. Thist mostly involves tinkering with Webpack config, as module federation
          affects how parts of an app like this are built, bundled, and deployed.
        </Typography>
      </Section>

      <Section h3="Updating The Module" sx={{ p: 3 }}>
        <Typography variant="body1">
          In this example, the nav gets broken up into a federated module. Perhaps nav has become
          super complex and there is enough work and value to put some unique individuals on a new
          "nav" team.
        </Typography>
      </Section>
    </Section>
  );

  //   <Section h3="">
  //   </Section>
  // </Fragment>
}
