import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
