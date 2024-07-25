import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { TodoType } from '../../types/TodoTypes';
import { addTodoThunk, deleteTodoThunk, editTodoThunk, getTodosThunk, toggleTodoStateThunk } from './todoAsyncActions';

type InitialStateType = {
  data: TodoType[];
  editingTodo: TodoType | null;
};

const initialState: InitialStateType = {
  data: [],
  editingTodo: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setEditingTodo: (state, action: PayloadAction<TodoType>) => {
      state.editingTodo = action.payload;
    },
    clearEditingTodo: (state) => {
      state.editingTodo = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodosThunk.fulfilled, (state, { payload }) => {
        state.data = payload.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      })
      .addCase(addTodoThunk.fulfilled, (state, { payload }) => {
        state.data = [payload, ...state.data]; // Добавление в начало списка
      })
      .addCase(deleteTodoThunk.fulfilled, (state, { payload }) => {
        state.data = state.data.filter((todo) => todo.id !== payload);
      })
      .addCase(editTodoThunk.fulfilled, (state, { payload }) => {
        const index = state.data.findIndex((todo) => todo.id === payload.id);
        if (index !== -1) {
          state.data[index] = payload; // Изменение задачи на месте
        }
      })
      .addCase(toggleTodoStateThunk.fulfilled, (state, { payload }) => {
        const index = state.data.findIndex((todo) => todo.id === payload.id);
        if (index !== -1) {
          state.data[index] = payload; // Изменение задачи на месте
        }
      });
  },
});

export const { setEditingTodo, clearEditingTodo } = todosSlice.actions;
export default todosSlice.reducer;
