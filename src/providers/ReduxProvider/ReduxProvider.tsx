import { Provider } from 'react-redux';
import store from '@/store';
import type { FunctionComponent, ReactNode } from 'react';

interface IReduxProviderProps {
  children: ReactNode;
}

const RouterProvider: FunctionComponent<IReduxProviderProps> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default RouterProvider;
