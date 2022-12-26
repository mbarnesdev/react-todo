import { useContext } from 'react';
import TodoListItem from './TodoListItem';
import { TodoListContext } from '@/features/TodoList';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import type { FC } from 'react';
import type { Todo, ITodoListEditModalProps } from '@/features/TodoList';
import TodoListEditModal from './TodoListEditModal';

export interface ITodoListItemsProps {}

interface ITodoListComposition {
  EditModal: FC<ITodoListEditModalProps>;
}

const TodoListItems: FC<ITodoListItemsProps> & ITodoListComposition = (
  props,
) => {
  const {
    data: todos,
    mutateRemove,
    mutateUpdateCompletion,
    mutateUpdateContent,
  } = useContext<any>(TodoListContext);

  const [parent] = useAutoAnimate<HTMLDivElement>();

  return (
    <>
      <TodoListItems.EditModal />
      <div ref={parent}>
        {todos.map((todo: Todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            removeTodo={mutateRemove}
            updateTodoCompleted={mutateUpdateCompletion}
            updateTodoContent={mutateUpdateContent}
          />
        ))}
      </div>
    </>
  );
};

TodoListItems.EditModal = TodoListEditModal;
export default TodoListItems;
