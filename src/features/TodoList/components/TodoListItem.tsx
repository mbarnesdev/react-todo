import { TbTrash } from 'react-icons/tb';
import cn from 'classnames';
import type { Todo } from '@/features/TodoList';
import type { FC } from 'react';

interface ITodoListItemProps {
  todo: Todo;
  checkable?: boolean;
  deletable?: boolean;
  toggleTodoCompleted: (todo: Todo) => void;
  removeTodo: (todo: Todo) => void;
}

const TodoListItem: FC<ITodoListItemProps> = (props) => {
  const { content, completed } = props.todo;

  const contentClassnames = cn('cursor-pointer select-none', {
    'todo-completed': completed,
  });

  const handleTodoContentClicked = () => {
    if (props.checkable) props.toggleTodoCompleted(props.todo);
  };
  const handleTodoRemoveButtonClicked = () => props.removeTodo(props.todo);
  return (
    <div className="flex flex-row m-2 p-2 border border-gray-600 justify-between">
      <p className={contentClassnames} onClick={handleTodoContentClicked}>
        {content}
      </p>
      {props.deletable && (
        <button onClick={handleTodoRemoveButtonClicked}>
          <TbTrash />
        </button>
      )}
    </div>
  );
};

export default TodoListItem;