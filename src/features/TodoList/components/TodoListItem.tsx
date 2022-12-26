import { TbTrash } from 'react-icons/tb';
import cn from 'classnames';
import type { Todo } from '@/features/TodoList';
import type { FC } from 'react';

interface ITodoListItemProps {
  todo: Todo;
  checkable?: boolean;
  deletable?: boolean;
  removeTodo: (value: Todo) => void;
  updateTodo: (value: Todo) => void;
}

const TodoListItem: FC<ITodoListItemProps> = (props) => {
  const { content, completed } = props.todo;

  const contentClassnames = cn('cursor-pointer select-none', {
    'todo-completed': completed,
  });

  const handleUpdateTodo = () => {
    if (props.checkable) props.updateTodo(props.todo);
  };
  const handleRemoveTodo = () => props.removeTodo(props.todo);

  return (
    <div className="flex flex-row m-2 p-2 border border-gray-600 justify-between">
      <p className={contentClassnames} onClick={handleUpdateTodo}>
        {content}
      </p>
      {props.deletable && (
        <button onClick={handleRemoveTodo}>
          <TbTrash />
        </button>
      )}
    </div>
  );
};

export default TodoListItem;
