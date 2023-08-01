import { Box, HStack, Text } from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi';

const NavMole = ({
  name,
  icon,
  isLogout,
}) => {
  return (
    <HStack pb={3} borderBottom="1px solid" borderColor="#393838">
      {isLogout && <FiLogOut />}
      <Text fontSize='sm' variant='nav'>{name}</Text>
    </HStack>
  );
};

export default NavMole;
