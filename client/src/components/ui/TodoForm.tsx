import { Box, Button, Input, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';

type PropsType = {
  todoSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function TodoForm({ todoSubmitHandler }: PropsType): JSX.Element {
  const [todo, setTodo] = useState('');
  const [img, setImg] = useState('');

  return (
    <Box
      onSubmit={todoSubmitHandler}
      as="form"
      mt={3}
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
    >
      <Stack spacing={3}>
        <Input
          name="todo"
          placeholder="Todo"
          size="md"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          required
        />
        <Input
          name="img"
          placeholder="Image URL"
          size="md"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <Button type="submit" colorScheme="blue" variant="solid">
          Submit
        </Button>
      </Stack>
    </Box>
  );
}
