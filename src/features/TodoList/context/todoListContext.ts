import { createContext } from 'react';
import type { Todo } from '@/features/TodoList';

interface ITodoListContext {
  data: Todo[] | undefined;
  mutateAdd: (value: Partial<Todo>) => void;
  mutateRemove: (id: string) => void;
  mutateUpdateCompletion: ({ id, completed }: Omit<Todo, 'content'>) => void;
}

export const TodoListContext = createContext<ITodoListContext | undefined>(
  undefined,
);
