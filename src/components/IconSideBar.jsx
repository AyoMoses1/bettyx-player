// @flow
import * as React from 'react';
import {
  Box,
  Image,
  Center,
  VStack,
  Link,
  Tooltip,
  IconButton,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { pathObject } from '../utils/paths';
import { FiLogOut } from 'react-icons/fi';

const Index = () => {
  const navs = pathObject.map((item) => 
    <NavIcon {...item} 
      key={item.main.name} 
      path={item.main.path || ''} 
      name={item.main.name} 
      icon ={item.main.icon} 
    />);

  return (
    <VStack
      bg='white'
      width='100%'
      height='100%'
      borderRight='1px solid'
      borderColor='gray.200'
    >
      <VStack borderBottom='1px solid' borderColor='gray.200' w='100%' h='20%'>
        <Center h='100%' width='100%'>
          <Image src='/images/logo.png' width='90%' height='auto' objectFit='cover' />
        </Center>
      </VStack>
      <Box
        display='flex'
        flexDirection='column'
        height='78%'
        width='100%'
        pt='5'
      >
        <>{navs}</>
        <LogoutIcon />
      </Box>
    </VStack>
  );
};

const NavIcon = ({
  path,
  icon,
  name,
}) => {
  return (
    <Center>
      <Tooltip label={name}>
        <Link
          as={NavLink}
          to={path}
          style={{ display: 'grid', placeItems: 'center' }}
        >
          <IconButton variant='solid' aria-label={''}>
            {icon}
          </IconButton>
        </Link>
      </Tooltip>
    </Center>
  );
};

const LogoutIcon = () => {
  return (
    <Center mt='auto'>
      <Tooltip label='Logout'>
        <IconButton color='secondary' variant='solid' aria-label={''}>
          <FiLogOut />
        </IconButton>
      </Tooltip>
    </Center>
  );
};

export default Index;
