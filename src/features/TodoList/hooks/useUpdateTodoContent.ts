import { useMutation } from '@tanstack/react-query';
import {
  updateTodoContent,
  useInvalidateFetchAllTodos,
} from '@/features/TodoList';
import type { Todo } from '@/features/TodoList';

export const useUpdateTodoContent = () => {
  const { invalidateFetchAllTodos } = useInvalidateFetchAllTodos();

  const { mutate: mutateUpdateContent } = useMutation(
    ({ id, content }: Omit<Todo, 'completed'>) =>
      updateTodoContent({ id, content }),
    {
      onSuccess: () => invalidateFetchAllTodos(),
    },
  );

  return { mutateUpdateContent };
};
