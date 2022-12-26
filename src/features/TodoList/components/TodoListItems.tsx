import TodoListItem from './TodoListItem';
import { useTodoListContext } from '@/features/TodoList';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import type { FC } from 'react';
import type { Todo } from '@/features/TodoList';

export interface ITodoListItemsProps {}

const TodoListItems: FC<ITodoListItemsProps> = (props) => {
  const {
    data: todos,
    mutateRemove,
    mutateUpdateCompletion,
  } = useTodoListContext();

  const [parent] = useAutoAnimate<HTMLDivElement>({
    duration: 250,
    easing: 'linear',
  });

  return (
    <div ref={parent}>
      {todos?.map((todo: Todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          removeTodo={mutateRemove}
          updateTodoCompleted={mutateUpdateCompletion}
        />
      ))}
    </div>
  );
};

export default TodoListItems;
