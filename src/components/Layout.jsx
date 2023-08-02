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
  return (
    <Box bgColor="primary">
      <Grid
        minH="100vh"
        templateRows="repeat(10, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={0}
      >
        <GridItem rowSpan={1} colSpan={5}>
          <Navbar />
        </GridItem>
        <GridItem rowSpan={9} colSpan={1}>
          <SideBar />
        </GridItem>
        <GridItem rowSpan={1} colSpan={4}>
          <NavBarMain />
        </GridItem>
        <Outlet />
      </Grid>
    </Box>
  );
};

export default Layout;
