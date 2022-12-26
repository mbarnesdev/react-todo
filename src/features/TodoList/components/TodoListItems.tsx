import { useContext } from 'react';
import TodoListItem from './TodoListItem';
import { TodoListContext } from '@/features/TodoList';
import type { FC } from 'react';
import type { Todo } from '@/features/TodoList';

export interface ITodoListItemsProps {}

const TodoListItems: FC<ITodoListItemsProps> = (props) => {
  const {
    data: todos,
    mutateRemove,
    mutateUpdateCompletion,
    mutateUpdateContent,
  } = useContext<any>(TodoListContext);

  return (
    <>
      {todos.map((todo: Todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          removeTodo={mutateRemove}
          updateTodoCompleted={mutateUpdateCompletion}
          updateTodoContent={mutateUpdateContent}
        />
      ))}
    </>
  );
};

export default TodoListItems;
