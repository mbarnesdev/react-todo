import { Overlay } from '../../components';
import type { FunctionComponent, ReactNode } from 'react';
import './Modal.css';

interface IModalProps {
  visible: boolean;
  children: ReactNode;
  closeFn: () => void;
  blurred?: boolean;
}

const Modal: FunctionComponent<IModalProps> = ({
  visible,
  children,
  closeFn,
  blurred = false,
}) => {
  if (!visible) return null;

  return (
    <Overlay onOverlayClick={closeFn} blurred={blurred}>
      <div onClick={(e) => e.stopPropagation()} className="modal-container">
        {children}
      </div>
    </Overlay>
  );
};

Modal.displayName = 'Modal';
export default Modal;
