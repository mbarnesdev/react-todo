import { createContext } from 'react';
import type { Todo } from '@/features/TodoList';

interface ITodoListContext {
  isEditModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const TodoListContext = createContext<ITodoListContext | undefined>(
  undefined,
);
