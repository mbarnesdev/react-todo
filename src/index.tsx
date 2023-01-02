import { createRoot } from 'react-dom/client';
import { ReduxProvider } from '@/providers';
import App from './App';
import './index.css';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <ReduxProvider>
    <App />
  </ReduxProvider>,
);
