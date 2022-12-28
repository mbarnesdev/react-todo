import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '@/features/TodoList';
import { Icon } from '@/components';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { MdDelete, MdOutlineDragIndicator, MdEdit } from 'react-icons/md';
import cn from 'classnames';
import type { FC } from 'react';

interface ITodoListItemProps {
  id: string;
  content: string;
  isCompleted: boolean;
}

const TodoListItem: FC<ITodoListItemProps> = ({ id, content, isCompleted }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTodo({ id }));
  const handleUpdate = () => dispatch(updateTodo({ id }));

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? '100' : 'auto',
    opacity: isDragging ? 0.45 : 1,
  };

  const contentClassnames = cn('cursor-pointer select-none', {
    'line-through': isCompleted,
  });

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="p-4 m-4 shadow-md flex flex-row justify-between items-center bg-white"
    >
      <div className="flex-1 flex flex-row justify-start items-center gap-2">
        <Icon {...attributes} {...listeners}>
          <MdOutlineDragIndicator />
        </Icon>
        <p className={contentClassnames} onClick={handleUpdate}>
          {content}
        </p>
      </div>
      <div className="flex flex-row gap-1">
        <Icon>
          <MdEdit />
        </Icon>
        <Icon onClick={handleDelete}>
          <MdDelete />
        </Icon>
      </div>
    </div>
  );
};

export default TodoListItem;
