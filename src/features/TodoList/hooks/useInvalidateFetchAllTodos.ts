import { useQueryClient } from '@tanstack/react-query';

export const useInvalidateFetchAllTodos = () => {
  const queryClient = useQueryClient();

  const invalidateFetchAllTodos = () =>
    queryClient.invalidateQueries({
      queryKey: ['fetch-all-todos'],
    });

  return { invalidateFetchAllTodos };
};
