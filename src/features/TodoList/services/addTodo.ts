import { AxiosClient } from '@/common';
import type { Todo } from '@/features/TodoList';

export const addTodo = (todo: Partial<Todo>) => {
  return AxiosClient.post('/todos', todo);
};
