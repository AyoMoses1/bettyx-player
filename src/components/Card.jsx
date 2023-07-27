import * as React from 'react';
import  {Box, useColorMode} from '@chakra-ui/react';


 const Card = ({children, ...props}) => {
    const { colorMode } = useColorMode();
    return (
        <Box  backgroundColor={colorMode === 'dark' ? 'black' : 'white'} {...props}>
            {children} 
        </Box>
    );
};

export default Card