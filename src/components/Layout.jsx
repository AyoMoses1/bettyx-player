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
import Navbar from "./NavBar";
import NavBarMain from "./NavBarMain";

const Layout = () => {
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    onToggle();
  }, []);

  return (
    <Box bgColor="#1B1834E6">
      <Navbar />
      <Grid minH="80vh" templateColumns="25vw 1fr">
        <GridItem rowSpan={{ base: 0, lg: 10 }} colSpan={{ base: 10, lg: 5 }} bg="blue">
          <Box zIndex="900" position="fixed" width="25vw" height="100vh">
            <SideBar isOpen={isOpen} />
          </Box>
        </GridItem>
        <GridItem rowSpan={{ base: 0, lg: 10 }} colSpan={{ base: 10, lg: 15 }}>
          <Box pt="4rem" pl="25vw" pr="1rem" pb="1rem" overflowY="auto">
            <Box
              position="fixed"
              top="12vh"
              // bg="white"
              width="100%"
            >
              <NavBarMain />
            </Box>
            <Box pt="5rem">
              <Outlet />
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Layout;
