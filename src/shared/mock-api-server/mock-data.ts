const debtors = [
  {
    _id: 'x78i14-gzidv',
    name: 'Руднев',
    debt: 300_000,
    isPaid: false,
  },
];

export function setMockData(): void {
  localStorage.setItem('debtors', JSON.stringify(debtors));
}

export const errorResponse = {
  code: 0,
  message: 'Ошибка клиента',
  details: [
    {
      test: 'asdad',
    },
  ],
};
