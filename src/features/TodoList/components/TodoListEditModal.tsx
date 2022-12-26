import { useContext } from 'react';
import { createPortal } from 'react-dom';
import TodoList from './TodoList';
import { TodoListContext } from '@/features/TodoList';
import { MdClose } from 'react-icons/md';
import type { FC } from 'react';

export interface ITodoListEditModalProps {}

const TodoListEditModal: FC<ITodoListEditModalProps> = (props) => {
  const { isEditModalOpen, handleModalClose } =
    useContext<any>(TodoListContext);

  if (!isEditModalOpen) return null;

  return createPortal(
    <div className="inset-center bg-white w-4/6 h-2/6 text-center p-4 rounded-xl shadow-xl">
      <button onClick={handleModalClose}>
        <MdClose />
      </button>
      <TodoList.EditForm />
    </div>,
    document.body,
  );
};

export default TodoListEditModal;
