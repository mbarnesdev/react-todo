import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removeTodo } from '@/features/TodoList';
import type { Todo } from '@/features/TodoList';

export const useRemoveTodo = () => {
  const queryClient = useQueryClient();

  const { mutate: mutateRemove } = useMutation(
    (todo: Todo) => removeTodo(todo.id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['fetch-all-todos'] });
      },
    },
  );

  return { mutateRemove };
};
