import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = [
  { name: 'Todos', path: '/' },
  { name: 'Counter', path: '/counter' },
];

function NavLinkItem({ link }: { link: { name: string, path: string } }): JSX.Element {
  return (
    <Box
      as={NavLink}
      to={link.path}
      px={2}
      py={1}
      rounded="md"
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      _activeLink={{
        fontWeight: 'bold',
        color: useColorModeValue('teal.600', 'teal.300'),
      }}
    >
      {link.name}
    </Box>
  );
}

export default function NavBar(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} boxShadow="dark-lg">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Box>Logo</Box>
          <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLinkItem key={link.name} link={link} />
            ))}
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <Menu>
            <MenuButton as={Button} rounded="full" variant="link" cursor="pointer" minW={0}>
              <Avatar
                size="sm"
                src="https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/41592b1a-61d3-4843-862d-46181e2b6c72/220x330"
              />
            </MenuButton>
            <MenuList>
              <MenuItem>Link 1</MenuItem>
              <MenuItem>Link 2</MenuItem>
              <MenuDivider />
              <MenuItem>Link 3</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            {Links.map((link) => (
              <NavLinkItem key={link.name} link={link} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
