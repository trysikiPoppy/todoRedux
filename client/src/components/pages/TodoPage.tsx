import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import TodoCard from '../ui/TodoCard';
import TodoForm from '../ui/TodoForm';
import useTodos from '../../hooks/useTodos';

function TodoPage(): JSX.Element {
  const {
    todos,
    todoSubmitHandler,
    deleteTodoHandler,
  } = useTodos();

  return (
    <>
      <TodoForm todoSubmitHandler={todoSubmitHandler} />
      <SimpleGrid columns={3} spacing={5}>
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            deleteHandler={deleteTodoHandler}
          />
        ))}
      </SimpleGrid>
    </>
  );
}

export default TodoPage;
