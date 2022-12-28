import { createPortal } from 'react-dom';
import type { FC } from 'react';

interface IModalProps {
  isOpen: boolean;
  closeFn: () => void;
}

const Modal: FC<IModalProps> = ({ isOpen, closeFn }) => {
  const handleCloseModal = () => closeFn();

  if (!isOpen) return null;

  return createPortal(
    <div className="absolute top-0 right-0 bottom-0 left-0 bg-red-300">
      <h1>Modal</h1>
      <button onClick={handleCloseModal}>Close</button>
    </div>,
    document.body,
  );
};

export default Modal;
