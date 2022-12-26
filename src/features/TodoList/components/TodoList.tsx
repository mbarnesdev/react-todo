import { useMemo } from 'react';
import TodoListForm from './TodoListForm';
import TodoListItems from './TodoListItems';
import {
  TodoListContext,
  useFetchTodos,
  useAddTodo,
  useRemoveTodo,
  useUpdateTodoCompleted,
} from '@/features/TodoList';
import type {
  ITodoListItemsProps,
  ITodoListFormProps,
} from '@/features/TodoList';
import type { FC, ReactNode } from 'react';

interface ITodoListComposition {
  Form: FC<ITodoListFormProps>;
  Items: FC<ITodoListItemsProps>;
}

interface ITodoListProps {
  children: ReactNode;
}

const TodoList: React.FC<ITodoListProps> & ITodoListComposition = (props) => {
  const { data, isLoading, isError } = useFetchTodos();

  const { mutateAdd } = useAddTodo();
  const { mutateRemove } = useRemoveTodo();
  const { mutateUpdateCompletion } = useUpdateTodoCompleted();

  const value = useMemo(
    () => ({
      data,
      mutateAdd,
      mutateRemove,
      mutateUpdateCompletion,
    }),
    [data, mutateAdd, mutateRemove, mutateUpdateCompletion],
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  return (
    <TodoListContext.Provider value={value}>
      {props.children}
    </TodoListContext.Provider>
  );
};

TodoList.Form = TodoListForm;
TodoList.Items = TodoListItems;

export default TodoList;
