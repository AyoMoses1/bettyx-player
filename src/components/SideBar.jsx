import React from 'react';
import {
  Box,
  Image,
  Center,
  VStack,
  Text,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { useQueryClient } from '@tanstack/react-query';
import _ from 'lodash'


import GroupNav, { SingleNav } from './GroupNav';
import NavMole from './NavMole';
import pagePaths, { pathObject } from '../utils/paths';

// import { useUserDetailsContext } from '../context/userDetailsContext';


const Index = (props) => {
  // const { userDetails } = useUserDetailsContext();
  const userDetails = {
    firstName: "ayo",
    lastName: "moses"
  }
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const navs = pathObject.map((item) => (
    item.sub.length ?
    <GroupNav {...item} key={item.main.name} />
    :
    <SingleNav  path={item.main.path || ''} 
    name={item.main.name} 
    icon ={item.main.icon}  key={item.main.name} />
  ));

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('la_auth');
    queryClient.cancelQueries();
    queryClient.clear();
    navigate(pagePaths.login);
  };

  return (
    <VStack
      bgColor='white'
      width='100%'
      height='100%'
      borderRight='1px solid'
      borderColor='gray.200'
    >
      <VStack borderBottom='1px solid' borderColor='gray.200' h='25%' w='100%'>
        <Center h='100%'>
          <VStack spacing={8}>
            <Center width='100%'>
              <Image src='/images/logo.png' width='70%' height='auto' objectFit='cover' />
            </Center>
            <Box>
            {/*   <Text variant='boldNormal' textAlign='center'>Afrimash</Text> */}
              <Text  variant='normal' textAlign='center'>{`${_.capitalize(userDetails?.firstName)} ${_.capitalize(userDetails?.lastName)}`}</Text>
              <Text  fontSize='xs' textAlign='center'>{_.capitalize(userDetails?.agentType?.replace("_", " "))}</Text>
            </Box>
          </VStack>
        </Center>
      </VStack>
      <Box
        display='flex'
        flexDirection='column'
        height='78%'
        width='100%'
        pl='4'
        pt='5'
        overflow='auto'
      >
        <>{navs}</>

        <Box mt='auto'>
          <LinkBox>
            <LinkOverlay href='' onClick={handleLogout}>
              <NavMole isLogout={true} name='Logout' icon={<FiLogOut />} />
            </LinkOverlay>
          </LinkBox>
        </Box>
      </Box>
    </VStack>
  );
};

export default Index;
