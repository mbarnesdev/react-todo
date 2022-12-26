import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTodo } from '@/features/TodoList';
import type { Todo } from '@/features/TodoList';

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  const { mutate: mutateUpdateCompletion } = useMutation(
    (todo: Todo) => updateTodo(todo.id, !todo.completed),
    {
      onSuccess: () =>
        queryClient.invalidateQueries({ queryKey: ['fetch-all-todos'] }),
    },
  );

  return { mutateUpdateCompletion };
};
