import { v1 } from 'uuid';

import { IDebtor } from 'shared/api';

export const db = {
  _parse: (debtors: string | null) => {
    if (!debtors) return [];
    return JSON.parse(debtors);
  },

  get: () => {
    const debtors = localStorage.getItem('debtors');
    return db._parse(debtors);
  },

  add: (debtor: IDebtor) => {
    const debtors = db.get();
    const newDebtor = { ...debtor, _id: v1(), isPaid: false };
    debtors.push(newDebtor);
    localStorage.setItem('debtors', JSON.stringify(debtors));

    return newDebtor;
  },

  changeStatus: (payload: IDebtor) => {
    const debtors = db.get();
    const target = debtors.findIndex(
      (debtor: IDebtor) => debtor._id === payload._id
    );

    if (target === -1) return null;

    const updatedDebtor = {
      ...debtors[target],
      isPaid: !debtors[target].isPaid,
    };
    debtors[target] = updatedDebtor;
    localStorage.setItem('debtors', JSON.stringify(debtors));

    return updatedDebtor;
  },
};
