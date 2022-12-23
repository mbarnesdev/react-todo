import { useQuery } from '@tanstack/react-query';
import { fetchAllTodos, TodoItem, TodoForm } from '@/features/TodoList';
import type { Todo } from '@/features/TodoList';

const TodoList = () => {
  const { data, isLoading, isError, error } = useQuery(
    ['fetch-all-todos'],
    fetchAllTodos,
  );

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <pre>{JSON.stringify(error)}</pre>;

  return (
    <div>
      <TodoForm />
      {data.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
