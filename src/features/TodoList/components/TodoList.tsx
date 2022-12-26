import TodoListForm from './TodoListForm';
import TodoListItems from './TodoListItems';
import { TodoListContext } from '@/features/TodoList';
import {
  useFetchTodos,
  useAddTodo,
  useRemoveTodo,
  useUpdateTodo,
} from '@/features/TodoList';
import type { FC, ReactNode } from 'react';
import type { ITodoListItemsProps } from '@/features/TodoList';

interface ITodoListComposition {
  Form: FC;
  Items: FC<ITodoListItemsProps>;
}

interface ITodoListProps {
  children: ReactNode;
}

const TodoList: React.FC<ITodoListProps> & ITodoListComposition = (props) => {
  const { data, isLoading, isError } = useFetchTodos();

  const { mutateAdd } = useAddTodo();
  const { mutateRemove } = useRemoveTodo();
  const { mutateUpdateCompletion } = useUpdateTodo();

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error...</p>;

  return (
    <TodoListContext.Provider
      value={{ data, mutateAdd, mutateRemove, mutateUpdateCompletion }}
    >
      {props.children}
    </TodoListContext.Provider>
  );
};

TodoList.Form = TodoListForm;
TodoList.Items = TodoListItems;

export default TodoList;
