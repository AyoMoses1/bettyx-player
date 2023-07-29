/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import {
  Grid,
  GridItem,
  Box,
  Flex,
  useDisclosure,
  keyframes,
  IconButton,
  useMediaQuery,
  Heading,
} from "@chakra-ui/react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

import SideBar from "./SideBar";
import IconSideBar from "./IconSideBar";
import breakPoints from "../utils/breakPoints";
import Navbar from "./NavBar";
import NavBarMain from "./NavBarMain";

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

  return (
    <Box>
      <Navbar />
      <Grid
        minH="80vh"
        // templateRows="repeat(10, 1fr)"
        templateColumns="25vw 1fr"
      >
        <GridItem rowSpan={{ base: 0, lg: 10 }} colSpan={{ base: 10, lg: 5 }}>
          <Box zIndex="900" position="fixed" width="25vw" height="100vh">
            <SideBar isOpen={isOpen} />
          </Box>
        </GridItem>
        <GridItem rowSpan={{ base: 0, lg: 10 }} colSpan={{ base: 10, lg: 15 }}>
          <Box pt="4rem" pl="25vw" pr="1rem" pb="1rem" overflowY="auto">
            <Box position="fixed" top="12vh" zIndex="800" bg="white" width="100%">
              <NavBarMain />
            </Box>

            {/* Scrolling Content */}
            <Box pt="5rem">
              {" "}
              {/* Adjust this padding as needed */}
              <Outlet />
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Layout;
