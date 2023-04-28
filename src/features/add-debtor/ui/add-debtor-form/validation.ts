import * as yup from 'yup';

export const schema = yup
  .object({
    name: yup
      .string()
      .required('Обязательное поле')
      .min(2, 'Минимальное количество - две буквы')
      .max(60, 'Допустимое количество букв - 60')
      .matches(/^[А-яа-я ]+$/g, 'Пожалуйста используйте киррилица')
      .trim(),

    debt: yup
      .number()
      .typeError('Используйте только цифры')
      .required('Введите сумму задолженности')
      .min(1, 'Сумма задолженности должна быть больше 0')
      .max(1_000_000_000_000)
      .integer('Значение должно быть целочисленное'),
  })
  .required();

export type FormData = yup.InferType<typeof schema>;
