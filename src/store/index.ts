import { configureStore } from '@reduxjs/toolkit';
import { todoListSliceReducer } from '@/features/TodoList';

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState') as string)
  : {};

const store = configureStore({
  reducer: {
    todoList: todoListSliceReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
