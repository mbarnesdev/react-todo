import { useState } from 'react';
import TodoListAddForm from './TodoListAddForm';
import TodoListItems from './TodoListItems';
import TodoListEditModal from './TodoListEditModal';
import {
  TodoListContext,
  useFetchTodos,
  useAddTodo,
  useRemoveTodo,
  useUpdateTodoCompleted,
  useUpdateTodoContent,
} from '@/features/TodoList';
import TodoListEditForm from './TodoListEditForm';
import { useAtom } from 'jotai';
import { isAppBlurredAtom } from '@/atoms';
import type {
  ITodoListItemsProps,
  ITodoListAddFormProps,
  ITodoListEditModalProps,
  ITodoListEditFormProps,
  Todo,
} from '@/features/TodoList';
import type { FC, ReactNode } from 'react';

interface ITodoListComposition {
  AddForm: FC<ITodoListAddFormProps>;
  EditForm: FC<ITodoListEditFormProps>;
  Items: FC<ITodoListItemsProps>;
  EditModal: FC<ITodoListEditModalProps>;
}

interface ITodoListProps {
  children: ReactNode;
}

const TodoList: React.FC<ITodoListProps> & ITodoListComposition = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [, setIsAppBlurred] = useAtom(isAppBlurredAtom);

  const { data, isLoading, isError } = useFetchTodos();

  const { mutateAdd } = useAddTodo();
  const { mutateRemove } = useRemoveTodo();
  const { mutateUpdateCompletion } = useUpdateTodoCompleted();
  const { mutateUpdateContent } = useUpdateTodoContent();

  const handleModalOpen = () => {
    setIsEditing(true);
    setIsAppBlurred(true);
    setIsEditModalOpen(true);
  };

  const handleModalClose = () => {
    setIsEditing(false);
    setEditingTodo(null);
    setIsAppBlurred(false);
    setIsEditModalOpen(false);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  return (
    <TodoListContext.Provider
      value={{
        data,
        mutateAdd,
        mutateRemove,
        mutateUpdateCompletion,
        mutateUpdateContent,
        isEditModalOpen,
        setIsEditModalOpen,
        isEditing,
        setIsEditing,
        editingTodo,
        setEditingTodo,
        handleModalClose,
        handleModalOpen,
      }}
    >
      {props.children}
    </TodoListContext.Provider>
  );
};

TodoList.AddForm = TodoListAddForm;
TodoList.EditForm = TodoListEditForm;
TodoList.Items = TodoListItems;
TodoList.EditModal = TodoListEditModal;

export default TodoList;
