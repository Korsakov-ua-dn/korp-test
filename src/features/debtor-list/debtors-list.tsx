import { useCallback } from 'react';

import { typedMemo } from 'shared/hocs';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { IDebtor } from 'shared/api';
import { changeDebtorStatus } from 'entities/debtor';

import { List, ListBody, ListHead, ListRow } from './ui';

export const DebtorsList: React.FC = typedMemo(() => {
  const dispatch = useAppDispatch();

  const debtors = useAppSelector((state) => state.debtor.data);

  const toggleDebtStatus = useCallback(
    (debtor: IDebtor) => dispatch(changeDebtorStatus(debtor)),
    [dispatch]
  );

  const renderItem = useCallback(
    (debtor: IDebtor) => {
      return (
        <ListRow key={debtor._id} debtor={debtor} toggle={toggleDebtStatus} />
      );
    },
    [toggleDebtStatus]
  );

  return (
    <List>
      <ListHead />

      <ListBody debtors={debtors} renderItem={renderItem} />
    </List>
  );
});
