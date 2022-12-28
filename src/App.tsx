import { TodoList } from '@/features/TodoList';

const App = () => {
  return (
    <TodoList>
      <TodoList.Form />
      <TodoList.Items />
    </TodoList>
  );
};

export default App;
