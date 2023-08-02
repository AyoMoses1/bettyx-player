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
    <VStack borderRight="1px solid" borderColor="gray.200">
      <Box
        // display="flex"
        // flexDirection="column"
        width="100%"
        bgColor="blue"
        color="white"
        // // pt="125"
        // overflow="auto"
      >
        <VStack>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<FiSearch color="gray.300" />}
            />
            <Input
              type="text"
              placeholder="Search..."
              size="md"
              borderRadius="none"
            />
          </InputGroup>
          <Box
            bgColor="gray1"
            color="textDark"
            width="100%"
            textAlign="center"
            py={2}
          >
            SPORTS SCHEDULE
          </Box>
        </VStack>
        <>{navs}</>
        <Box
          bgColor="black"
          color="textDark"
          width="100%"
          py={2}
        >
          FEEDBACK
        </Box>
      </Box>
    </VStack>
  );
};

export default Index;
