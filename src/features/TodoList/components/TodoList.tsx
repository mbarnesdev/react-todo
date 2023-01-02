import { useState, useMemo } from 'react';
import TodoListForm from './TodoListForm';
import TodoListItems from './TodoListItems';
import { TodoListContext } from '@/features/TodoList';
import TodoListEditForm from './TodoListEditForm';
import Modal from '../../../components/Modal/Modal';
import type { Todo } from '@/features/TodoList';
import type { FunctionComponent, ReactNode } from 'react';

interface ITodoListComposition {
  Form: FunctionComponent;
  Items: FunctionComponent;
}

interface ITodoListProps {
  children: ReactNode;
}

const TodoList: FunctionComponent<ITodoListProps> & ITodoListComposition = ({
  children,
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentEditingTodo, setCurrentEditingTodo] = useState<Todo | null>(
    null,
  );

  const openModal = () => setIsEditModalOpen(true);
  const closeModal = () => {
    setCurrentEditingTodo(null);
    setIsEditModalOpen(false);
  };

  const value = useMemo(
    () => ({
      isEditModalOpen,
      openModal,
      closeModal,
      currentEditingTodo,
      setCurrentEditingTodo,
    }),
    [
      isEditModalOpen,
      openModal,
      closeModal,
      currentEditingTodo,
      setCurrentEditingTodo,
    ],
  );

  return (
    <TodoListContext.Provider value={value}>
      {children}
      <Modal visible={isEditModalOpen} closeFn={closeModal} blurred>
        <TodoListEditForm />
      </Modal>
    </TodoListContext.Provider>
  );
};

TodoList.Form = TodoListForm;
TodoList.Items = TodoListItems;

export default TodoList;
