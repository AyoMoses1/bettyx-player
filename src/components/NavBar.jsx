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
  Image,
  HStack,
} from "@chakra-ui/react";
import { FiSearch, FiLogOut } from "react-icons/fi";
import {
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineLineChart,
  AiOutlineCalendar,
  AiOutlineSetting,
} from "react-icons/ai";
import { CurrentPageContext } from "../App";
import { BiChevronsDown, BiLogInCircle, BiPowerOff } from "react-icons/bi";
import {
  FaAddressCard,
  FaChevronDown,
  FaSdCard,
  FaTh,
  FaTv,
  FaVrCardboard,
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const handleLogout = () => {
    console.log("Logout clicked");
  };

  // const { setCurrentPage } = useContext(CurrentPageContext);

  return (
    <Box bg="blue" color="white" py={["2", "4"]} h={["8vh", "12vh"]}>
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
              <CgProfile size={24}/>
              <Spacer/>
              <HStack>
                <span>R1524</span>
              <FaChevronDown />
              </HStack>
            </Flex>
          </MenuButton>
          <MenuList width="20vw">
            <MenuItem minH="48px">
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="https://placekitten.com/100/100"
                alt="Fluffybuns the destroyer"
                mr="12px"
              />
              <span>Fluffybuns the Destroyer</span>
            </MenuItem>
            <MenuItem minH="40px">
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="https://placekitten.com/120/120"
                alt="Simon the pensive"
                mr="12px"
              />
              <span>Simon the pensive</span>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default Navbar;
