import { configureStore } from '@reduxjs/toolkit';
import { todoListSliceReducer } from '@/features/TodoList';

const store = configureStore({
  reducer: {
    todoList: todoListSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
