import { TodoList } from '@/features/TodoList';

const App = () => {
  return (
    <TodoList
      initialData={[{ id: '0001', content: 'Feed the cats', completed: false }]}
    >
      <TodoList.Form />
      <TodoList.Items deletable checkable />
    </TodoList>
  );
};

export default App;
