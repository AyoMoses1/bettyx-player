import React from "react";
import {
  Box,
  Image,
  Center,
  VStack,
  Text,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { useQueryClient } from "@tanstack/react-query";
import _ from "lodash";

import GroupNav, { SingleNav } from "./GroupNav";
import NavMole from "./NavMole";
import pagePaths, { pathObject } from "../utils/paths";

// import { useUserDetailsContext } from '../context/userDetailsContext';

const Index = (props) => {
  // const { userDetails } = useUserDetailsContext();
  const userDetails = {
    firstName: "ayo",
    lastName: "moses",
  };
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const navs = pathObject.map((item) =>
    item.sub.length ? (
      <GroupNav {...item} key={item.main.name} />
    ) : (
      <SingleNav
        path={item.main.path || ""}
        name={item.main.name}
        icon={item.main.icon}
        key={item.main.name}
      />
    )
  );

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("la_auth");
    queryClient.cancelQueries();
    queryClient.clear();
    navigate(pagePaths.login);
  };

  return (
    <VStack
      bgColor="white"
      width="100%"
      height="100%"
      borderRight="1px solid"
      borderColor="gray.200"
    >
      <VStack borderBottom="1px solid" borderColor="gray.200" h="15%" w="100%">
        <Center h="100%" w="100%">
          <VStack align="start" w="100%" height="100%">
            <InputGroup height="100%">
              <InputLeftElement
                pointerEvents="none"
                children={<FiSearch color="gray.300" />}
              />
              <Input
                type="text"
                placeholder="Search..."
                size="md"
                borderRadius="none"
                height="100%"
              />
            </InputGroup>
            <Box
              bgColor="blue"
              color="textDark"
              w="100%"
              height="50%"
              py={4}
              mt={-2}
              textAlign="center"
            >
              SPORTS SCHEDULE
            </Box>
          </VStack>
        </Center>
      </VStack>
      <Box
        display="flex"
        flexDirection="column"
        height="78%"
        width="100%"
        pl="4"
        pt="5"
        overflow="auto"
      >
        <>{navs}</>

        <Box mt="auto">
          <LinkBox>
            <LinkOverlay href="" onClick={handleLogout}>
              <NavMole isLogout={true} name="Logout" icon={<FiLogOut />} />
            </LinkOverlay>
          </LinkBox>
        </Box>
      </Box>
    </VStack>
  );
};

export default Index;
