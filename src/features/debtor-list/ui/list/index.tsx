import './style.scss';

interface IProps {
  children: React.ReactNode;
}

export const List: React.FC<IProps> = ({ children }) => {
  return <div className="List">{children}</div>;
};
