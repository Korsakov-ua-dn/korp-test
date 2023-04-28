import { useCallback } from 'react';

import { typedMemo } from 'shared/hocs';
import { useAppDispatch } from 'shared/hooks';
import { addDebtor } from 'entities/debtor/model/thunks';

import { AddDebtorForm, FormData } from './add-debtor-form';

export const AddDebtor: React.FC = typedMemo(() => {
  const dispatch = useAppDispatch();

  const onSubmit = useCallback(
    (data: FormData) => dispatch(addDebtor(data)),
    [dispatch]
  );

  return <AddDebtorForm onSubmit={onSubmit} />;
});
