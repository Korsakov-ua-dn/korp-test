import { Request, Response, Server } from 'miragejs';

import { END_POINT } from 'shared/api';

import { errorResponse } from './mock-data';
import { db } from './db';

export const debtorRoutes = (server: Server) => {
  server.get(END_POINT, () => {
    const debtors = db.get();
    return new Response(200, {}, debtors);
  });

  server.post(END_POINT, (_, request: Request) => {
    const res = db.add(JSON.parse(request.requestBody));

    if (!res) return new Response(404, {}, errorResponse);

    return new Response(200, {}, res);
  });

  server.put(END_POINT, (_, request: Request) => {
    const res = db.update(JSON.parse(request.requestBody));

    if (!res) return new Response(404, {}, errorResponse);

    return new Response(200, {}, res);
  });
};
