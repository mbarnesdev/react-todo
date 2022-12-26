import { createContext } from 'react';
import type { Todo } from '@/features/TodoList';

export interface ITodoListContext {
  todos: Todo[];
  toggleTodoCompleted: (todo: Todo) => void;
  addTodo: (todo: Todo) => void;
  removeTodo: (todo: Todo) => void;
}

export const TodoListContext = createContext<ITodoListContext | undefined>(
  undefined,
);
