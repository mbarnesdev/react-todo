import { createPortal } from 'react-dom';
import type { FunctionComponent, ReactNode, ReactPortal } from 'react';

interface IPortalProps {
  container?: HTMLElement;
  children: ReactNode;
}

const Portal: FunctionComponent<IPortalProps> = ({
  children,
  container = document.body,
}): ReactPortal => {
  return createPortal(children, container);
};

Portal.displayName = 'Portal';
export default Portal;
