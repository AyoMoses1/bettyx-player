import {
  Box,
  Button,
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useSignIn } from "./queryHooks";

const schema = yup
  .object()
  .shape({
    accountId: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const SignIn = () => {
  const { mutate, isLoading } = useSignIn();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    mutate({ data });
  };
  return (
    <Box
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgImage="url('https://images.pexels.com/photos/3131406/pexels-photo-3131406.jpeg?auto=compress&cs=tinysrgb&w=600')"
      bgSize="cover"
      bgPosition="center"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bgGradient="linear(to-r, #0a192f, #0d253f)"
        opacity="0.9"
      />

      <Box
        bg="white"
        p="8"
        rounded="lg"
        boxShadow="lg"
        maxWidth="400px"
        width="90%"
        position="relative"
        zIndex="1"
      >
        <Text fontSize="xl" fontWeight="bold" mb="6" textAlign="center">
          Player Login
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl id="email">
            <FormLabel>Email Address</FormLabel>
            <Input
              placeholder="Player ID"
              size="lg"
              mb="4"
              borderRadius="full"
              focusBorderColor="purple.400"
              {...register("accountId")}
            />
            {errors?.accountId && (
              <FormErrorMessage>Enter a valid players ID</FormErrorMessage>
            )}
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Password"
              size="lg"
              mb="6"
              borderRadius="full"
              focusBorderColor="purple.400"
              {...register("password")}
            />
            {errors?.password && (
              <FormErrorMessage>Password is required</FormErrorMessage>
            )}
          </FormControl>
          <Button
            type="submit"
            colorScheme="purple"
            size="lg"
            width="full"
            borderRadius="full"
            variant="secondary"
            isLoading={isLoading}
          >
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default SignIn;
