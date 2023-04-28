import { useCallback } from 'react';
import Button from '@mui/material/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { typedMemo } from 'shared/hocs';
import { Form } from 'shared/ui/form';
import Input from 'shared/ui/input';

import { FormData, schema } from './validation';
import './style.scss';

interface IProps {
  onSubmit: SubmitHandler<FormData>;
}

export const AddDebtorForm: React.FC<IProps> = typedMemo(({ onSubmit }) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = useCallback(
    (data: FormData) => {
      onSubmit(data);
      reset();
    },
    [onSubmit, reset]
  );

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)} className="AddDebtorForm">
      <Input
        {...register('name' as const)}
        error={!!errors['name']}
        helperText={errors['name']?.message || ' '}
        label="ФИО"
        className="AddDebtorForm__input"
      />

      <Input
        {...register('debt' as const)}
        error={!!errors['debt']}
        helperText={errors['debt']?.message || ' '}
        label="Задолженность (₽)"
        className="AddDebtorForm__input"
      />

      <Button
        className="AddDebtorForm__submit"
        type="submit"
        variant="contained"
      >
        Добавить
      </Button>
    </Form>
  );
});
