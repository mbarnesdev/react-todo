import { TodoList } from '@/features/TodoList';

const TodoListPage = () => {
  return (
    <TodoList>
      <TodoList.Form />
      <TodoList.Items />
    </TodoList>
  );
};

export default TodoListPage;
