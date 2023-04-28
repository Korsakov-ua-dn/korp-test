import { typedMemo } from 'shared/hocs';

import type { IDebtor } from 'shared/api';
import './style.scss';

interface IProps {
  debtors: IDebtor[];
  renderItem: (debtor: IDebtor) => React.ReactElement;
}

export const ListBody: React.FC<IProps> = typedMemo(
  ({ debtors, renderItem }) => {
    return (
      <ul className="List__body">
        {!debtors.length && <li className="List__nodata">Список пуст</li>}

        {debtors.map((debtor) => renderItem(debtor))}
      </ul>
    );
  }
);
