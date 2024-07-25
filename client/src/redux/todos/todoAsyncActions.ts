import { createAsyncThunk } from '@reduxjs/toolkit';
import todoService from '../../services/todoService';
import type { EditTodoPayload, TodoDataType, TodoType } from '../../types/TodoTypes';

export const getTodosThunk = createAsyncThunk('todos/getTodos', async () => {
  const data = await todoService.getTodos();
  return data;
});

export const addTodoThunk = createAsyncThunk<TodoType, TodoDataType>(
  'todos/addTodo',
  async (data) => {
    const todo = await todoService.addTodo(data);
    return todo;
  },
);

export const deleteTodoThunk = createAsyncThunk<TodoType['id'], TodoType['id']>(
  'todos/deleteTodo',
  async (id) => {
    await todoService.deleteTodo(id);
    return id;
  },
);

export const editTodoThunk = createAsyncThunk<TodoType, EditTodoPayload>(
  'todos/editTodo',
  async ({ id, updates }) => {
    const updatedTodo = await todoService.editTodo({ id, updates });
    return updatedTodo;
  },
);

export const toggleTodoStateThunk = createAsyncThunk<TodoType, TodoType['id']>(
  'todos/toggleTodoState',
  async (id) => {
    const updatedTodo = await todoService.toggleTodoState(id);
    return updatedTodo;
  },
);
