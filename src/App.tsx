import { TodoList } from '@/features/TodoList';

const App = () => {
  return (
    <TodoList>
      <TodoList.Form />
      <TodoList.Items deletable checkable />
    </TodoList>
  );
};

export default App;
