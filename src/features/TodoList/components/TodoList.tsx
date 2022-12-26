import { useState } from 'react';
import TodoListForm from './TodoListForm';
import TodoListItems from './TodoListItems';
import { TodoListContext } from '@/features/TodoList';
import type { FC, ReactNode } from 'react';
import type { ITodoListItemsProps, Todo } from '@/features/TodoList';

interface ITodoListComposition {
  Form: FC;
  Items: FC<ITodoListItemsProps>;
}

interface ITodoListProps {
  children: ReactNode;
  initialData?: Todo[];
}

/**
 * explore the option of holding the main fetch query below and supplying
 * todos +  handler methods in context value
 */
const TodoList: React.FC<ITodoListProps> & ITodoListComposition = (props) => {
  const [todos, setTodos] = useState<Todo[]>(props.initialData || []);

  const toggleTodoCompleted = (todo: Todo) =>
    setTodos((prevTodos: Todo[]) =>
      prevTodos.map((currTodo: Todo) =>
        currTodo.id === todo.id
          ? { ...currTodo, completed: !currTodo.completed }
          : currTodo,
      ),
    );

  const addTodo = (todo: Todo) =>
    setTodos((prevTodos: Todo[]) => [...prevTodos, todo]);

  const removeTodo = (todo: Todo) => {
    setTodos((prevTodos: Todo[]) =>
      prevTodos.filter((currTodo: Todo) => !(currTodo.id === todo.id)),
    );
  };

  return (
    <TodoListContext.Provider
      value={{ todos, toggleTodoCompleted, addTodo, removeTodo }}
    >
      {props.children}
    </TodoListContext.Provider>
  );
};

TodoList.Form = TodoListForm;
TodoList.Items = TodoListItems;

export default TodoList;
