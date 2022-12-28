import { createRoot } from 'react-dom/client';
import { ReduxProvider } from '@/providers';
import { AppRouter } from '@/components';
import './index.css';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <ReduxProvider>
    <AppRouter />
  </ReduxProvider>,
);
