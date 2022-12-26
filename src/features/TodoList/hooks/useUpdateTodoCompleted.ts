import { useMutation } from '@tanstack/react-query';
import {
  updateTodoCompleted,
  useInvalidateFetchAllTodos,
} from '@/features/TodoList';
import type { Todo } from '@/features/TodoList';

export const useUpdateTodoCompleted = () => {
  const { invalidateFetchAllTodos } = useInvalidateFetchAllTodos();

  const { mutate: mutateUpdateCompletion } = useMutation(
    ({ id, completed }: Omit<Todo, 'content'>) =>
      updateTodoCompleted({ id, completed }),
    {
      onSuccess: () => invalidateFetchAllTodos(),
    },
  );

  return { mutateUpdateCompletion };
};
