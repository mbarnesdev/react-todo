import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import type { Todo } from '@/features/TodoList';

interface TodoListState {
  todos: Todo[];
}

const initialState: TodoListState = {
  todos: [],
};

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ content: string }>) => {
      const { content } = action.payload;
      state.todos?.push({
        id: uuid(),
        content,
        isCompleted: false,
      });
    },
    deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
      const { id: targetID } = action.payload;
      state.todos = state.todos.filter(
        ({ id: iteratorID }: Todo) => iteratorID != targetID,
      );
    },
    updateTodo: (state, action: PayloadAction<{ id: string }>) => {
      const { id: targetID } = action.payload;
      const idxOfTargetTodo = state.todos
        .map(({ id }: Todo) => id)
        .findIndex((iteratorID: string) => iteratorID === targetID);
      state.todos[idxOfTargetTodo].isCompleted =
        !state.todos[idxOfTargetTodo].isCompleted;
    },
    swapItems: (
      state,
      action: PayloadAction<{ activeID: string; overID: string }>,
    ) => {
      const { activeID, overID } = action.payload;
      if (!overID) return;

      const todosMapped = state.todos.map(({ id }: Todo) => id);
      const activeIndex = todosMapped.indexOf(activeID);
      const overIndex = todosMapped.indexOf(overID);

      [state.todos[activeIndex], state.todos[overIndex]] = [
        state.todos[overIndex],
        state.todos[activeIndex],
      ];
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, swapItems } =
  todoListSlice.actions;
export default todoListSlice.reducer;
