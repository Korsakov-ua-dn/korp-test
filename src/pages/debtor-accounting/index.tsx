import { useLayoutEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { Section } from 'shared/ui/section';
import { Layout } from 'shared/ui/layout';
import { fetchAllDebtors } from 'entities/debtor';

const DebtorAccounting: React.FC = () => {
  const dispatch = useAppDispatch();

  const debtor = useAppSelector((state) => ({
    data: state.debtor.data,
    loading: state.debtor.loading,
    error: state.debtor.error,
  }));

  useLayoutEffect(() => {
    dispatch(fetchAllDebtors());
  }, [dispatch]);

  if (debtor.loading) {
    return (
      <Section>
        <Layout>Загрузка данных о должниках...</Layout>
      </Section>
    );
  }

  if (debtor.error) {
    return (
      <Section>
        <Layout>{debtor.error}</Layout>
      </Section>
    );
  }

  if (!debtor.data.length) {
    return (
      <Section>
        <Layout>Список должников пуст</Layout>
      </Section>
    );
  }

  return (
    <Section>
      <Layout>{debtor.data.map((debtor) => debtor.name)}</Layout>
    </Section>
  );
};

export default DebtorAccounting;
