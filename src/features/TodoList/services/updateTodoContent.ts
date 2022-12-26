import { AxiosClient } from '@/common';
import type { Todo } from '@/features/TodoList';

export const updateTodoContent = ({ id, content }: Omit<Todo, 'completed'>) => {
  return AxiosClient.put(`/todo/update-content/${id}`, { content });
};
