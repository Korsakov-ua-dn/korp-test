import { typedMemo } from 'shared/hocs';

import './style.scss';

export const ListHead: React.FC = typedMemo(() => {
  return (
    <div className="List__head">
      <div className="List__Row">
        <span className="List__cell">Вернул</span>
        <span className="List__cell">ФИО</span>
        <span className="List__cell">Задолженность (₽)</span>
      </div>
    </div>
  );
});
