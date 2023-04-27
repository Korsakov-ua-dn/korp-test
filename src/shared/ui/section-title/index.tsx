import React from 'react';

import './style.scss';

interface IProps {
  children: string;
}

export const SectionTitle: React.FC<IProps> = ({ children }) => {
  return <h2 className="SectionTitle">{children}</h2>;
};
