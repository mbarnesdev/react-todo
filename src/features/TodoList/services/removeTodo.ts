import { AxiosClient } from '@/common';

export const removeTodo = (id: string) => {
  return AxiosClient.delete(`/todo/${id}`);
};
