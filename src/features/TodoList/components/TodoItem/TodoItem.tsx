import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removeTodo, updateTodo } from '@/features/TodoList';
import cn from 'classnames';
import type { FC } from 'react';
import type { Todo } from '@/features/TodoList';

const TodoItem: FC<{ todo: Todo }> = ({ todo }) => {
  const { id, content, completed } = todo;
  const titleClassnames = cn({ 'todo-completed': completed });

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
    <div className="flex flex-row gap-10 p-5 border border-black max-w-max m-2">
      <p className={titleClassnames}>{content}</p>
      <button onClick={handleRemoveTodo}>Remove</button>
      <button onClick={handleUpdateTodo}>Update</button>
    </div>
  );
};

export default TodoItem;
