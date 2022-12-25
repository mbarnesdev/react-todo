import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removeTodo, updateTodo } from '@/features/TodoList';
import { TbTrash } from 'react-icons/tb';
import cn from 'classnames';
import type { FC } from 'react';
import type { Todo } from '@/features/TodoList';

const TodoItem: FC<{ todo: Todo }> = ({ todo }) => {
  const { id, content, completed } = todo;
  const titleClassnames = cn('cursor-pointer', { 'todo-completed': completed });

  const queryClient = useQueryClient();

  const { mutate: mutateRemove } = useMutation((id: string) => removeTodo(id), {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetch-all-todos'] });
    },
  });

  const { mutate: mutateUpdate } = useMutation(
    (id: string) => updateTodo(id, !completed),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['fetch-all-todos'] });
      },
    },
  );

  const handleRemoveTodo = () => mutateRemove(id);
  const handleUpdateTodo = () => mutateUpdate(id);

  return (
    <div className="flex flex-row justify-between items-center py-4-">
      <p className={titleClassnames} onClick={handleUpdateTodo}>
        {content}
      </p>

      <button onClick={handleRemoveTodo}>
        <TbTrash size={25} />
      </button>
    </div>
  );
};

export default TodoItem;
