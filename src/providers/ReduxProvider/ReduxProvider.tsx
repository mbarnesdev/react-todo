import { Provider } from 'react-redux';
import store from '@/store';
import type { FC, ReactNode } from 'react';

interface IReduxProviderProps {
  children: ReactNode;
}

const RouterProvider: FC<IReduxProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default RouterProvider;
