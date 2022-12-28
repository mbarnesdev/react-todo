import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageRoot, PageTodoList, PageNotFound } from '@/routes';
import { Navigation } from '@/components';

const AppRouterProvider = () => {
  return (
    <BrowserRouter basename="/">
      <Navigation />
      <Routes>
        <Route path="/" element={<PageRoot />} />
        <Route path="/todo-list" element={<PageTodoList />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouterProvider;
