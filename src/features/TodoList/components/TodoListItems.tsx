import { useContext } from 'react';
import { TodoListContext } from '@/features/TodoList';
import TodoListItem from './TodoListItem';
import type { FC } from 'react';
import type { Todo } from '@/features/TodoList';

export interface ITodoListItemsProps {
  deletable?: boolean;
  checkable?: boolean;
  editable?: boolean;
}

const TodoListItems: FC<ITodoListItemsProps> = (props) => {
  const { todos, toggleTodoCompleted, removeTodo } =
    useContext<any>(TodoListContext);

  return (
    <div>
      {todos.map((todo: Todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          deletable={props.deletable}
          checkable={props.checkable}
          toggleTodoCompleted={toggleTodoCompleted}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default TodoListItems;
