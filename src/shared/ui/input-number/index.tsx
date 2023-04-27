import { memo } from 'react';

import './style.scss';

type Props = JSX.IntrinsicElements['input'] & {
  className?: string;
};

export const InputNumber: React.FC<Props> = memo(
  ({ className, ...restProps }) => {
    const props = {
      ...restProps,
      className: `InputNumber ${className ? 'InputNumber_' + className : ''}`,
      type: 'text',
    };

    return <input {...props} />;
  }
);
