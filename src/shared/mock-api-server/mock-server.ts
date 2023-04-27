import { createServer } from 'miragejs';

import { debtorRoutes } from './mock-routes';

export const createMirageServer = () => {
  const server = createServer({
    routes() {
      this.urlPrefix = process.env.REACT_APP_PUBLIC_API_URL as string;
      debtorRoutes(this);
    },
  });

  return server.shutdown;
};
