import { useState, useMemo } from 'react';
import TodoListForm from './TodoListForm';
import TodoListItems from './TodoListItems';
import {
  ITodoListFormProps,
  ITodoListItemsProps,
  TodoListContext,
} from '@/features/TodoList';
import { Modal } from '@/features/Modal';
import type { FC, ReactNode } from 'react';

interface ITodoListComposition {
  Form: FC<ITodoListFormProps>;
  Items: FC<ITodoListItemsProps>;
}

interface ITodoListProps {
  children: ReactNode;
}

const TodoList: FC<ITodoListProps> & ITodoListComposition = ({ children }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openModal = () => setIsEditModalOpen(true);
  const closeModal = () => setIsEditModalOpen(false);

  const value = useMemo(
    () => ({
      isEditModalOpen,
      openModal,
      closeModal,
    }),
    [isEditModalOpen, openModal, closeModal],
  );

  return (
    <TodoListContext.Provider value={value}>
      {children}
      <Modal isOpen={isEditModalOpen} closeFn={closeModal} />
    </TodoListContext.Provider>
  );
};

TodoList.Form = TodoListForm;
TodoList.Items = TodoListItems;

export default TodoList;
