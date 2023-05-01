import './style.scss';

type Props = JSX.IntrinsicElements['form'];

export const Form: React.FC<Props> = ({ className, ...restProps }) => {
  const props = {
    ...restProps,
    className: `Form ${className ? className : ''}`,
  };

  return <form {...props} />;
};
