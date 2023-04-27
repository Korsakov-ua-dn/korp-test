import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const DebtorAccounting = lazy(() => import('./debtor-accounting'));

export const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path={'/'} element={<DebtorAccounting />} />
    </Routes>
  );
};
