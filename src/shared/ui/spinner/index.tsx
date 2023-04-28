import { typedMemo } from 'shared/hocs';

import './style.scss';

interface IProps {
  loading: boolean;
}

export const Spinner: React.FC<IProps> = typedMemo(({ loading }) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()} // блокирует многократные клики по чекбоксам
      className={`Spinner Spinner_${loading}`}
    />
  );
});
