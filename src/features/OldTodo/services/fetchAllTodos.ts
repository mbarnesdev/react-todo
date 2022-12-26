import { AxiosClient } from '@/common';
import type { Todo } from '@/features/TodoList';

export const fetchAllTodos = (): Promise<Todo[]> => {
  return AxiosClient.get('/todos').then((res) => res.data.todos);
};
