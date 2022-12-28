import './Icon.scss';
import type {
  FC,
  ReactNode,
  HTMLAttributes,
  ButtonHTMLAttributes,
} from 'react';

interface IIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Icon: FC<IIconProps> & HTMLAttributes<HTMLButtonElement> = ({
  children,
  ...restProps
}) => {
  return (
    <button className="icon" {...restProps}>
      {children}
    </button>
  );
};

export default Icon;
