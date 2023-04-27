import React, { memo } from 'react';
import Select, { SelectProps } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { v1 } from 'uuid';

import './style.scss';

type Props = SelectProps;

export const SelectMUI: React.FC<Props> = memo((props) => {
  const id = v1();
  const style = {
    sx: {
      '.Mui-selected': {
        backgroundColor: 'var(--color_accent)!important',
        opacity: 0.85,
        color: '#ffffff',
      },
    },
  };

  const { label } = props;

  return (
    <FormControl className="SelectWrapper" size="small">
      <InputLabel id={id}>{label}</InputLabel>
      <Select MenuProps={style} labelId={id} id={id} {...props} />
    </FormControl>
  );
});
