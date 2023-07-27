// @flow
import * as React from 'react';
import { Box, Spinner, Flex } from '@chakra-ui/react';


const Loading = (props) => {
  return (
    <Flex alignItems='center'>
      <Spinner color='primary' size='xs' />
      <Box ml={3} textStyle='small' layerStyle='muted'>
        ...{props?.text}
      </Box>
    </Flex>
  );
};

export default Loading;
