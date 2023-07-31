import React, { useContext } from "react";
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Spacer,
  VStack,
  Text,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { FaAddressCard, FaChevronDown, FaTh, FaTv } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { menuItems } from "./utils/helpers";
import { BiPowerOff } from "react-icons/bi";
import { useQueryClient } from "@tanstack/react-query";
import paths from "utils/paths";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("bet_token");
    localStorage.removeItem("accountId");
    queryClient.cancelQueries();
    queryClient.clear();
    navigate(paths.login);
  };
  return (
    <Box
      bg="blue"
      color="white"
      py={["2", "4"]}
      h={["8vh", "12vh"]}
      position="fixed"
      height="10vh"
      width="100vw"
      zIndex="800"
    >
      <Flex maxW="98%" mx="auto" align="center">
        <Box>
          <Flex>
            <VStack mr={12}>
              <Text variant="nav">SPORTS</Text>
              <AiOutlineHome size={32} />
            </VStack>
            <VStack mr={12}>
              <Text variant="nav">LIVE</Text>
              <FaTv size={32} />
            </VStack>
            <VStack mr={12}>
              <Text variant="nav">CASINO</Text>
              <FaAddressCard size={32} />
            </VStack>
            <VStack mr={12}>
              <Text variant="nav">MORE</Text>
              <FaTh size={32} />
            </VStack>
            <Box p="4" mr={12} bg="blue" display={["block", "none"]}>
              <FiSearch size={24} />
            </Box>
          </Flex>
        </Box>
        <Spacer />
        <Box>
          <Flex>
            <VStack mr={12} alignItems="end">
              <Text variant="navBold">Balance</Text>
              <Text>$0</Text>
            </VStack>
            <VStack mr={12} alignItems="end">
              <Text variant="navBold">Pending</Text>
              <Text>$0</Text>
            </VStack>
            <VStack mr={12} alignItems="end">
              <Text variant="navBold">Available</Text>
              <Text>$100</Text>
            </VStack>
            <Box p="4" mr={12} bg="blue" display={["block", "none"]}>
              <FiSearch size={24} />
            </Box>
          </Flex>
        </Box>
        <Spacer />
        <Menu>
          <MenuButton as={Button}>
            <Flex justifyContent="space-between" width="20vw">
              <CgProfile size={24} />
              <Spacer />
              <HStack>
                <span>R1524</span>
                <FaChevronDown />
              </HStack>
            </Flex>
          </MenuButton>
          <MenuList width="20vw" bgColor="black" border="none">
            {menuItems.map((item) => (
              <MenuItem
                minH="48px"
                bgColor="black"
                _hover={{ bgColor: "blue" }}
              >
                <Icon
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://placekitten.com/100/100"
                  alt="Fluffybuns the destroyer"
                  mr="12px"
                  as={item.icon}
                />
                <span>{item?.name}</span>
              </MenuItem>
            ))}
            <MenuItem
              minH="48px"
              bgColor="black"
              _hover={{ bgColor: "blue" }}
              onClick={handleLogout}
            >
              <Icon boxSize="2rem" mr="12px" as={BiPowerOff} />
              <span>Sign Out</span>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default Navbar;
