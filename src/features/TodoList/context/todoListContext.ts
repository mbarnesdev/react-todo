import { createContext } from 'react';
import type { Todo } from '@/features/TodoList';

interface ITodoListContext {
  data: any;
  mutateAdd: (value: Partial<Todo>) => void;
  mutateRemove: (value: Todo) => void;
  mutateUpdateCompletion: (value: Todo) => void;
}

export const TodoListContext = createContext<ITodoListContext | undefined>(
  undefined,
);
