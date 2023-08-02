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
      <Box height="100px">
        <Navbar />
      </Box>
      <Grid
        height="calc(100vh - 100px)"
        templateColumns="repeat(5, 1fr)"
        overflow={"hidden"}
      >
        <GridItem height="100%" colSpan={[5, 1]} overflow="auto">
          <SideBar />
        </GridItem>
        <GridItem colSpan={[5, 4]}>
          <NavBarMain />
          <Outlet />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Layout;
