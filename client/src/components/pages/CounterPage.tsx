import { Box, Button, VStack, Heading } from '@chakra-ui/react';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { increment, incrementBy, decrement } from '../../redux/counter/counterSlice';

export default function CounterPage(): JSX.Element {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <VStack spacing={4}>
      <Heading>{counter}</Heading>
      <Button colorScheme="blue" onClick={() => dispatch(increment())}>Increment</Button>
      <Button colorScheme="green" onClick={() => dispatch(incrementBy(5))}>Increment by 5</Button>
      <Button colorScheme="red" onClick={() => dispatch(decrement())}>Decrement</Button>
    </VStack>
  );
}
