import { useMutation } from '@tanstack/react-query';
import { removeTodo, useInvalidateFetchAllTodos } from '@/features/TodoList';

export const useRemoveTodo = () => {
  const { invalidateFetchAllTodos } = useInvalidateFetchAllTodos();

  const { mutate: mutateRemove } = useMutation((id: string) => removeTodo(id), {
    onSuccess: () => invalidateFetchAllTodos(),
  });

  return { mutateRemove };
};
