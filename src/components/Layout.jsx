/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Grid,
  GridItem,
  Box,
  Flex,
  useDisclosure,
  keyframes,
  IconButton,
  useMediaQuery,
} from '@chakra-ui/react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

import SideBar from './SideBar';
import IconSideBar from './IconSideBar';
import breakPoints from '../utils/breakPoints';


const close = keyframes`
  from { 
      transform: translate(0vw); 
 
    }
  to { 
      transform: translate(-15vw); 


      }
`;

const open = keyframes`
  from { 
      transform: translate(-15vw); 

    }
  to{ 
      transform: translate(0vw); 

      }
`;

const rightPainClose = keyframes`
  from { margin-left: 5vw;}
  to { margin-left: 15vw;}
`;

const rightPainOpen = keyframes`
  from { margin-left: 15vw;}
  to { margin-left: 5vw; }
`;

const toggleClose = keyframes`
  from { margin-left: 4vw; }
  to { margin-left: 14vw; }
`;

const toggleOpen = keyframes`
  from { margin-left: 4vw; }
  to { margin-left: 4vw; }
`;

const Layout = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isLargerThan1500] = useMediaQuery(breakPoints.laptopL);

  useEffect(() => {
    onToggle();
  }, []);

  const animateOpen = isOpen
    ? `${open} 0.3s linear 0s forwards`
    : `${close} 0s linear 0s forwards`;

  const bigAnimateOpen = !isOpen
    ? `${rightPainOpen} 0s linear 0s forwards`
    : `${rightPainClose} 0.3s linear 0s forwards`;

  const animateToggle = isOpen
    ? `${toggleClose} 0.3s linear 0.1s forwards`
    : `${toggleOpen} 0s linear 0s forwards`;

  return (
    <Grid
      minH='100vh'
      templateRows='repeat(10, 1fr)'
      templateColumns='repeat(20, 1fr)'
    >
      <GridItem rowSpan={{ base: 0, lg: 10 }} colSpan={{ base: 20, lg: 20 }}>
        <Flex h='100%'>
          <Box
            zIndex='900'
            h='100vh'
            position='fixed'
            bgColor='red'
            animation={animateOpen}
            width='15%'
          >
            <SideBar isOpen={isOpen} />
          </Box>
          <Box
            position='fixed'
            h='100vh'
            width='5%'
            display={!isOpen ? 'block' : 'none'}
          >
            <IconSideBar />
          </Box>
          <Box width={isOpen ? '85%' : '95%'} animation={bigAnimateOpen}>
            <Outlet />
          </Box>
        </Flex>
        <IconButton
          animation={animateToggle}
          position='fixed'
          top='4'
          left={isOpen ? '0.2vw' : '1.7vw'}
          zIndex='1000'
          onClick={onToggle}
          p={0}
          size={isLargerThan1500 ? 'md' : 'xs'}
          isRound={true}
          boxShadow='base'
          variant='solid'
          aria-label={''}
        >
          {isOpen ? <AiFillCaretLeft /> : <AiFillCaretRight />}
        </IconButton>
      </GridItem>
    </Grid>
  );
};


export default Layout;
