import { useContext } from 'react';
import { TodoListContext } from '@/features/TodoList';

export const useTodoListContext = () => {
  const context = useContext(TodoListContext);

  if (!context) throw new Error('TodoListContext out of scope.');

  return context;
};
