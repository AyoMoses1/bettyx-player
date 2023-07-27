import { Box, Text } from "@chakra-ui/react";

const SingleDetail = ({
  title,
  value,
}) => {
  return (
    <Box mt={6} flexBasis="33%" textAlign="center">
      <Text color="gray3" fontSize="1.1vw">
        {title}
      </Text>
      <Text mt={2} color="blackAlpha.900" fontSize="1.1vw">
        {value}
      </Text>
    </Box>
  );
};

export default SingleDetail;
