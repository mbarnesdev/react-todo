import { useQuery } from '@tanstack/react-query';
import { fetchAllTodos } from '@/features/TodoList';

export const useFetchTodos = () => {
  const { data, isLoading, isError, error } = useQuery(
    ['fetch-all-todos'],
    fetchAllTodos,
  );

  return {
    data,
    isLoading,
    isError,
    error,
  };
};
