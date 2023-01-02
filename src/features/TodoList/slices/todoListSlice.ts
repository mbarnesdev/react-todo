import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { arrayMove } from '@dnd-kit/sortable';
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
    updateTodoCompleted: (state, action: PayloadAction<{ id: string }>) => {
      const { id: targetID } = action.payload;
      const idxOfTargetTodo = state.todos
        .map(({ id }: Todo) => id)
        .findIndex((iteratorID: string) => iteratorID === targetID);
      state.todos[idxOfTargetTodo].isCompleted =
        !state.todos[idxOfTargetTodo].isCompleted;
    },
    updateTodoContent: (
      state,
      action: PayloadAction<{ id: string; content: string }>,
    ) => {
      const { id: targetID, content: newContent } = action.payload;
      const idxOfTargetTodo = state.todos
        .map(({ id }: Todo) => id)
        .findIndex((iteratorID: string) => iteratorID === targetID);
      state.todos[idxOfTargetTodo].content = newContent;
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

      state.todos = arrayMove(state.todos, activeIndex, overIndex);
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  updateTodoCompleted,
  updateTodoContent,
  swapItems,
} = todoListSlice.actions;
export default todoListSlice.reducer;
