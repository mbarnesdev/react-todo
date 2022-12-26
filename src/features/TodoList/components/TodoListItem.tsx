import { useContext } from 'react';
import { TodoListContext } from '@/features/TodoList';
import {
  ImCheckboxChecked,
  ImCheckboxUnchecked,
  ImBin,
  ImPencil,
} from 'react-icons/im';
import cn from 'classnames';
import type { Todo } from '@/features/TodoList';
import type { FC } from 'react';

interface ITodoListItemProps {
  todo: Todo;
  removeTodo: (id: string) => void;
  updateTodoCompleted: ({ id, completed }: Omit<Todo, 'content'>) => void;
  updateTodoContent: ({ id, content }: Omit<Todo, 'completed'>) => void;
}

const TodoListItem: FC<ITodoListItemProps> = (props) => {
  const { setEditingTodo, handleModalOpen } = useContext<any>(TodoListContext);
  const { id, content, completed } = props.todo;

  const handleUpdateTodoCompleted = () =>
    props.updateTodoCompleted({ id, completed: !completed });
  const handleRemoveTodo = () => props.removeTodo(props.todo.id);

  const containerClassnames = cn(
    'flex flex-row m-2 p-2 border border-gray-600 justify-between',
    {
      'bg-green-500': completed,
    },
  );

  const contentClassnames = cn('select-none', {
    'todo-completed': completed,
  });

  const handleEditTodo = () => {
    setEditingTodo(props.todo);
    handleModalOpen();
  };

  return (
    <div className={containerClassnames}>
      <p className={contentClassnames}>{content}</p>
      <div>
        <button onClick={handleUpdateTodoCompleted}>
          {props.todo.completed ? (
            <ImCheckboxChecked />
          ) : (
            <ImCheckboxUnchecked />
          )}
        </button>
        <button onClick={handleRemoveTodo}>
          <ImBin />
        </button>
        <button onClick={handleEditTodo}>
          <ImPencil />
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
