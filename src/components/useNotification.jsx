import { useToast  } from "@chakra-ui/react";

const useNotification = () => {
    const toast = useToast();
    return (props)  => (
        toast({
            title: props.title,
            description: props.description,
            status: props.status,
            duration: 1000,
            isClosable: true,
            position: "top",
          })
    )
}


export default useNotification;