import React, { useState } from 'react';
import DefaultLayout from './../layouts/default';
import Reader from './../components/reader'

/*
  The app is a composition of a DefaultLayout and a Reader
  - Default layout contains the responsive toolbar + drawer
  - reader is a buncha text
*/
export default function App({window}) {
  return (
    <DefaultLayout window={window}>
      <Reader />
    </DefaultLayout>
  );
}