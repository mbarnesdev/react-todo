import { TodoListItem, swapItems } from '@/features/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import {
  DndContext,
  closestCenter,
  useSensor,
  PointerSensor,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import type { RootState } from '@/store';
import type { DragEndEvent } from '@dnd-kit/core';
import type { Todo } from '@/features/TodoList';

const TodoListItems = () => {
  const todos = useSelector((state: RootState) => state.todoList.todos);
  const dispatch = useDispatch();

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id)
      dispatch(
        swapItems({
          activeID: active.id as string,
          overID: over?.id as string,
        }),
      );
  };
  const sensors = [useSensor(PointerSensor)];

  if (!Array.isArray(todos) || !todos.length) return <p>No todos...</p>;

  return (
    <DndContext
      sensors={sensors}
      modifiers={[restrictToVerticalAxis]}
      onDragEnd={handleDragEnd}
      collisionDetection={closestCenter}
    >
      <SortableContext
        items={todos.map(({ id }: Todo) => id)}
        strategy={verticalListSortingStrategy}
      >
        {todos?.map((todo: Todo) => (
          <TodoListItem key={todo.id} {...todo} />
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default TodoListItems;
