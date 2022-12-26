import { createContext } from 'react';
import type { Todo } from '@/features/TodoList';

interface ITodoListContext {
  data: Todo[] | undefined;
  mutateAdd: (value: Partial<Todo>) => void;
  mutateRemove: (id: string) => void;
  mutateUpdateCompletion: ({ id, completed }: Omit<Todo, 'content'>) => void;
  mutateUpdateContent: ({ id, content }: Omit<Todo, 'completed'>) => void;
  isEditModalOpen: boolean;
  setIsEditModalOpen: (value: boolean) => void;
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
  editingTodo: Todo | null;
  setEditingTodo: (value: Todo | null) => void;
  handleModalClose: () => void;
  handleModalOpen: () => void;
}

export const TodoListContext = createContext<ITodoListContext | undefined>(
  undefined,
);
