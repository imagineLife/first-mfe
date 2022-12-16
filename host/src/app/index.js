// import('./mfeWorkaround.js');
import React, { useState } from 'react';
const DefaultLayout = React.lazy(() => import('./../layouts/default'));
const Reader = React.lazy(() => import('./../components/reader'));

/*
  The app is a composition of a DefaultLayout and a Reader
  - Default layout contains the responsive toolbar + drawer
  - reader is a buncha text
*/
export default function App({ window }) {
  return (
    <React.Suspense fallback={<span></span>}>
      <DefaultLayout window={window}>
        <Reader />
      </DefaultLayout>
    </React.Suspense>
  );
}
