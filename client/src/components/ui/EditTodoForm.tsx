import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import type { TodoType } from '../../types/TodoTypes';
import { editTodoThunk } from '../../redux/todos/todoAsyncActions';

type EditTodoFormProps = {
  todo: TodoType;
  isOpen: boolean;
  onClose: () => void;
};

function EditTodoForm({ todo, isOpen, onClose }: EditTodoFormProps): JSX.Element {
  const [editedTodo, setEditedTodo] = useState<TodoType>(todo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setEditedTodo(todo);
  }, [todo]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setEditedTodo({ ...editedTodo, [name]: value });
  };

  const handleSubmit = async (): Promise<void> => {
    try {
      await dispatch(editTodoThunk({ id: editedTodo.id, updates: editedTodo })).unwrap();
      onClose();
    } catch (error) {
      console.error('Failed to update todo:', error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Todo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel htmlFor="todo">Todo</FormLabel>
            <Input id="todo" name="todo" value={editedTodo.todo} onChange={handleInputChange} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel htmlFor="img">Image URL</FormLabel>
            <Input id="img" name="img" value={editedTodo.img} onChange={handleInputChange} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={() => { void handleSubmit(); }}>
            Save
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default EditTodoForm;
