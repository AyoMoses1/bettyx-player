import { Box } from "@chakra-ui/react";

import PageHeader from "./PageHeading";

export const PageScaffold = (props) => {
  return (
    <>
      <PageHeader title={props.title} />
      <Box maxW="100%" p={4}>
        {props.children}
      </Box>
    </>
  );
};

export default PageScaffold;
