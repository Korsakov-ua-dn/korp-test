import { useCallback } from 'react';

import { typedMemo } from 'shared/hocs';
import { IDebtor } from 'shared/api';
import { formatNumber } from 'shared/lib';

import './style.scss';

interface IProps {
  debtor: IDebtor;
  updateDebtor: (debtor: IDebtor) => void;
}

export const ListRow: React.FC<IProps> = typedMemo(
  ({ debtor, updateDebtor }) => {
    const toggleDebtStatus = useCallback(
      () => updateDebtor({ ...debtor, isPaid: !debtor.isPaid }),
      [debtor, updateDebtor]
    );

    return (
      <div className="List__Row">
        <span className="List__cell">
          <input
            checked={debtor.isPaid}
            onChange={toggleDebtStatus}
            type="checkbox"
            style={{ margin: 'auto' }}
          />
        </span>
        <span className="List__cell">{debtor.name}</span>
        <span className="List__cell">{`${formatNumber(debtor.debt)} ₽`}</span>
      </div>
    );
  }
);
