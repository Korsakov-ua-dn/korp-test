import './style.scss';

type Props = JSX.IntrinsicElements['section'] & {
  className?: string;
};

export const Section: React.FC<Props> = ({ className, ...restProps }) => {
  const props = {
    ...restProps,
    className: `Section ${className ? className : ''}`,
  };

  return <section {...props} />;
};
