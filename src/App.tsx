import { TodoList } from './features/TodoList';

const App = () => {
  return (
    <div className="max-w-lg absolute m-auto left-0 right-0">
      <TodoList>
        <TodoList.Form />
        <TodoList.Items />
      </TodoList>
    </div>
  );
};

export default App;
