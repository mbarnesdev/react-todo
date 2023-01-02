import { Portal } from '../../components';
import { clsx } from 'clsx';
import type { FunctionComponent, ReactNode } from 'react';
import './Overlay.css';

interface IOverlayProps {
  children: ReactNode;
  onOverlayClick: () => void;
  blurred: boolean;
}

const Overlay: FunctionComponent<IOverlayProps> = ({
  children,
  onOverlayClick,
  blurred,
}) => {
  const classNamesParsed = clsx('overlay-container', {
    'overlay-container--blurred': blurred,
  });

  return (
    <Portal>
      <div onClick={onOverlayClick} className={classNamesParsed}>
        {children}
      </div>
    </Portal>
  );
};

Overlay.displayName = 'Overlay';
export default Overlay;
