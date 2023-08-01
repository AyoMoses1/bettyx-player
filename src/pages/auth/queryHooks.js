import { useMutation } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import services from "./services";

export const useSignIn = () => {
  const toast = useToast();
  const location = useLocation();
  const navigate = useNavigate();

  let from = (location.state)
    ? (location.state ).from?.pathname
    : "/";

  return useMutation(services.signin, {
    onError: (data) => {
      console.log(data, "failed");
      const errObj = data.response?.data;
      toast({
        title: "message",
        description: `${data?.response?.data?.message}`,
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    },
    onSuccess: (data) => {
      localStorage.setItem("bet_token", data.data.token);
      localStorage.setItem("accountId", data.data.user.accountId);
      navigate(from, { replace: true });
    },
  });
};
