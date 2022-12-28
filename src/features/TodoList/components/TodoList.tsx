import TodoListForm from './TodoListForm';
import TodoListItems from './TodoListItems';
import type {
  ITodoListFormProps,
  ITodoListItemsProps,
} from '@/features/TodoList';
import type { FC, ReactNode } from 'react';

interface ITodoListComposition {
  Form: FC<ITodoListFormProps>;
  Items: FC<ITodoListItemsProps>;
}

interface ITodoListProps {
  children: ReactNode;
}

const TodoList: FC<ITodoListProps> & ITodoListComposition = ({ children }) => {
  return <>{children}</>;
};

TodoList.Form = TodoListForm;
TodoList.Items = TodoListItems;

export default TodoList;
