import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTodo } from '@/features/TodoList';
import type { Todo } from '@/features/TodoList';

export const useUpdateTodo = (todo: Todo) => {
  const queryClient = useQueryClient();

  const { mutate: mutateUpdate } = useMutation(
    () => updateTodo(todo.id, !todo.completed),
    {
      onSuccess: () =>
        queryClient.invalidateQueries({ queryKey: ['fetch-all-todos'] }),
    },
  );

  return { mutateUpdate };
};
