import { useEffect } from 'react';

import { createMirageServer } from 'shared/mock-api-server';
import { Routing } from 'pages';

import { withProviders } from './providers';

import './index.scss';

export const App = withProviders(() => {
  useEffect(() => {
    // if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    console.log('ATTENTION - Using mirage server');
    createMirageServer();
    // }
  }, []);

  return <Routing />;
});
