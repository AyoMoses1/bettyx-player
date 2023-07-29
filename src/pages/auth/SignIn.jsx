import { Box, Button, ChakraProvider, Input, Text } from "@chakra-ui/react";

const SignIn = () => {
  return (
    <Box
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgImage="url('https://images.pexels.com/photos/3131406/pexels-photo-3131406.jpeg?auto=compress&cs=tinysrgb&w=600')" // Replace with your background image URL
      bgSize="cover"
      bgPosition="center"
    >
      {/* Background Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bgGradient="linear(to-r, #0a192f, #0d253f)" // Dark blue gradient from left to right

        opacity="0.9" // Adjust the opacity to control the blending effect
      />

      <Box
        bg="white"
        p="8"
        rounded="lg"
        boxShadow="lg"
        maxWidth="400px"
        width="90%"
        position="relative" // Add position relative to the login box to layer it above the background overlay
        zIndex="1" // Ensure the login box is above the background overlay
      >
        <Text fontSize="xl" fontWeight="bold" mb="6" textAlign="center">
          Player Login
        </Text>
        <Input
          placeholder="Player ID"
          size="lg"
          mb="4"
          borderRadius="full"
          focusBorderColor="purple.400"
        />
        <Input
          type="password"
          placeholder="Password"
          size="lg"
          mb="6"
          borderRadius="full"
          focusBorderColor="purple.400"
        />
        <Button
          colorScheme="purple"
          size="lg"
          width="full"
          borderRadius="full"
          variant="secondary"
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default SignIn;
