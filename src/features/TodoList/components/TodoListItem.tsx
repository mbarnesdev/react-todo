import { useContext } from 'react';
import { TodoListContext } from '@/features/TodoList';
import {
  MdOutlineEdit,
  MdOutlineRemoveCircleOutline,
  MdCheckBoxOutlineBlank,
  MdOutlineCheckBox,
} from 'react-icons/md';
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

  const contentClassnames = cn('select-none', {
    'todo-completed': completed,
  });

  const handleEditTodo = () => {
    setEditingTodo(props.todo);
    handleModalOpen();
  };

  const iconSize = 30;

  return (
    <div className="p-4 m-8 shadow-md flex flex-row justify-between items-center">
      <p className={contentClassnames}>{content}</p>
      <div className="flex flex-row justify-center items-center gap-2">
        <button onClick={handleUpdateTodoCompleted}>
          {props.todo.completed ? (
            <MdOutlineCheckBox size={iconSize} />
          ) : (
            <MdCheckBoxOutlineBlank size={iconSize} />
          )}
        </button>
        <button onClick={handleRemoveTodo}>
          <MdOutlineRemoveCircleOutline size={iconSize} color={'red'} />
        </button>
        <button onClick={handleEditTodo}>
          <MdOutlineEdit size={iconSize} />
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
