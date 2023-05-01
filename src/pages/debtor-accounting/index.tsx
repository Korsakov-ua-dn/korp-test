import { useLayoutEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { Section } from 'shared/ui/section';
import { Layout } from 'shared/ui/layout';
import { Spinner } from 'shared/ui/spinner';
import { fetchAllDebtors } from 'entities/debtor';
import { AddDebtor } from 'features/add-debtor';
import { DebtorsList } from 'features/debtor-list';

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

  if (debtor.error) {
    return (
      <Section>
        <Layout>{debtor.error}</Layout>
      </Section>
    );
  }

  return (
    <Section>
      <Layout>
        <AddDebtor />

        <DebtorsList />
      </Layout>

      <Spinner loading={debtor.loading} />
    </Section>
  );
};

export default DebtorAccounting;
