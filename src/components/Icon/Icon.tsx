import type { FC, ReactNode, HTMLAttributes } from 'react';
import './Icon.scss';

interface IIconProps {
  onClick?: () => void;
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
