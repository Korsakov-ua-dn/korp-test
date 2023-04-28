import { typedMemo } from 'shared/hocs';

import './style.scss';

interface IProps {
  children: React.ReactNode;
  className?: string;
  onSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
}

export const Form: React.FC<IProps> = typedMemo(
  ({ children, className, onSubmit }) => {
    return (
      <form
        className={`Form ${className ? className : ''}`}
        onSubmit={onSubmit}
      >
        {children}
      </form>
    );
  }
);
