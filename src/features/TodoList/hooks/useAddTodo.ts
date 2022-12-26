import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTodo } from '@/features/TodoList';
import type { Todo } from '@/features/TodoList';

export const useAddTodo = () => {
  const queryClient = useQueryClient();

  const { mutate: mutateAdd } = useMutation(
    (todo: Partial<Todo>) => addTodo(todo),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['fetch-all-todos'] });
      },
    },
  );

  return { mutateAdd };
};
