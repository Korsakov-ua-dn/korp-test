import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Section } from 'shared/ui/section';
import { Layout } from 'shared/ui/layout';

export const withRouter = (component: () => React.ReactNode) => () =>
  (
    <BrowserRouter>
      <Suspense
        fallback={
          <Section>
            <Layout>Загрузка приложения...</Layout>
          </Section>
        }
      >
        {component()}
      </Suspense>
    </BrowserRouter>
  );
