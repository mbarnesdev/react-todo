import { AxiosClient } from '@/common';
import type { Todo } from '@/features/TodoList';

export const updateTodoCompleted = ({
  id,
  completed,
}: Omit<Todo, 'content'>) => {
  return AxiosClient.put(`/todo/${id}`, { completed });
};
