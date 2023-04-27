import { forwardRef, memo } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

import './style.scss';

const Input = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, ...rest }: TextFieldProps, ref) => {
    const props = {
      ...rest,
      className: `Input ${className ? 'Input_' + className : ''}`,
    };

    return <TextField inputRef={ref} variant="outlined" {...props} />;
  }
);

export default memo(Input) as typeof Input;
