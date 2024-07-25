import React from 'react';
import { Box, Badge, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text, useToast, useDisclosure } from '@chakra-ui/react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import type { TodoType } from '../../types/TodoTypes';
import EditTodoForm from './EditTodoForm';
import { toggleTodoStateThunk } from '../../redux/todos/todoAsyncActions';

type TodoCardProps = {
  todo: TodoType;
  deleteHandler: (id: TodoType['id']) => void;
};

function TodoCard({
  todo,
  deleteHandler,
}: TodoCardProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  const toast = useToast();

  const handleToggleClick = (): void => {
    void (async () => {
      try {
        await dispatch(toggleTodoStateThunk(todo.id)).unwrap();
        toast({
          title: `Todo ${todo.done ? 'reopened' : 'completed'}.`,
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } catch (error) {
        toast({
          title: 'An error occurred.',
          description: 'Unable to update todo.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    })();
  };

  return (
    <Card
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      bg={todo.done ? 'gray.300' : 'white'}
      transition="all 0.3s"
      filter={todo.done ? 'grayscale(100%)' : 'none'}
    >
      <CardBody>
        {todo.img && (
          <Box position="relative">
            <Image
              src={todo.img}
              alt="todo image"
              borderRadius="lg"
              objectFit="cover"
              maxH="200px"
              w="100%"
              opacity={todo.done ? 0.5 : 1}
            />
            <Badge
              position="absolute"
              top="1"
              left="1"
              colorScheme={todo.done ? 'green' : 'red'}
              variant="solid"
              fontSize="0.8em"
              borderRadius="full"
              px={2}
            >
              {todo.done ? 'Completed' : 'Pending'}
            </Badge>
          </Box>
        )}
        <Stack mt="6" spacing="3">
          <Heading size="md" fontFamily="body" color={todo.done ? 'gray.500' : 'teal.500'}>
            {todo.todo}
          </Heading>
          <Text fontSize="lg" color={todo.done ? 'gray.500' : 'gray.500'}>
            Due: {new Date(todo.createdAt).toLocaleDateString()}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button onClick={handleToggleClick} variant="solid" colorScheme={todo.done ? 'gray' : 'teal'}>
            {todo.done ? 'Mark as Pending' : 'Mark as Completed'}
          </Button>
          <Button variant="outline" colorScheme={todo.done ? 'gray' : 'teal'} onClick={onOpen}>
            Edit
          </Button>
          <Button variant="outline" colorScheme={todo.done ? 'gray' : 'red'} onClick={() => deleteHandler(todo.id)}>
            Delete
          </Button>
        </ButtonGroup>
      </CardFooter>
      <EditTodoForm todo={todo} isOpen={isOpen} onClose={onClose} />
    </Card>
  );
}

export default TodoCard;
