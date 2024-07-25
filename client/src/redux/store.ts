import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter/counterSlice';
import todosReducer from './todos/todosSlice'; 

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todos: todosReducer,
    
  },
  devTools: process.env.NODE_ENV !== 'production', // включаем Redux DevTools только в разработке
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
