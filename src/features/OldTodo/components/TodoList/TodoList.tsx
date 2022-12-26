import { TodoItem, TodoForm, useFetchTodos } from '@/features/TodoList';
import type { Todo } from '@/features/TodoList';

const TodoList = () => {
  const { data, isLoading, isError, error } = useFetchTodos();

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <pre>{JSON.stringify(error)}</pre>;

  return (
    <div className="w-2/5 p-4 shadow-lg">
      <TodoForm />
      {data?.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
