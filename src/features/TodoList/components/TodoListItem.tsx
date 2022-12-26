import { TbTrash } from 'react-icons/tb';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
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

  const containerClassnames = cn(
    'flex flex-row m-2 p-2 border border-gray-600 justify-between',
    {
      'bg-green-500': completed,
    },
  );

  const contentClassnames = cn('select-none', {
    'todo-completed': completed,
  });

  const handleUpdateTodo = () => {
    if (props.checkable) props.updateTodo(props.todo);
  };
  const handleRemoveTodo = () => props.removeTodo(props.todo);

  return (
    <div className={containerClassnames}>
      <p className={contentClassnames}>{content}</p>
      <div>
        {props.checkable && (
          <button onClick={handleUpdateTodo}>
            {props.todo.completed ? (
              <ImCheckboxChecked />
            ) : (
              <ImCheckboxUnchecked />
            )}
          </button>
        )}
        {props.deletable && (
          <button onClick={handleRemoveTodo}>
            <TbTrash />
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoListItem;
