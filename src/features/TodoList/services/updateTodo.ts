import { AxiosClient } from '@/common';

export const updateTodo = (id: string, completed: boolean) => {
  return AxiosClient.put(`/todo/${id}`, { completed });
};
