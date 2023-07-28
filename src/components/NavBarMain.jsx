import React from "react";
import { Box, Flex, VStack, Text } from "@chakra-ui/react";
import styled from "styled-components";

const navLinks = [
  {
    name: "straight",
    symbol: "s",
  },
  {
    name: "parlay",
    symbol: "p",
  },
  {
    name: "teaser",
    symbol: "T",
  },
  {
    name: "If Bet",
    symbol: "I",
  },
  {
    name: "reverse",
    symbol: "R",
  },
  {
    name: "refresh",
    symbol: "r",
  },
  {
    name: "continue",
    symbol: "c",
  },
];
const NavBarMain = () => {
  return (
    <StyledBox color="white" px={0} py={0}>
      <Flex align="center">
        {navLinks.map((item) => (
          <StyledBox bgColor="blue" mr={4}>
            <Text variant="navBold">{item.symbol}</Text>
            <Text variant="nav">{item.name}</Text>
          </StyledBox>
        ))}
      </Flex>
    </StyledBox>
  );
};

export default NavBarMain;

const StyledBox = styled(Box)`
  padding: 5px 30px;
  text-align: center;
`;
