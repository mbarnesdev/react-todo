import { useMutation } from '@tanstack/react-query';
import { addTodo, useInvalidateFetchAllTodos } from '@/features/TodoList';
import type { Todo } from '@/features/TodoList';

export const useAddTodo = () => {
  const { invalidateFetchAllTodos } = useInvalidateFetchAllTodos();

  const { mutate: mutateAdd } = useMutation(
    (todo: Partial<Todo>) => addTodo(todo),
    {
      onSuccess: () => invalidateFetchAllTodos(),
    },
  );

  return { mutateAdd };
};
