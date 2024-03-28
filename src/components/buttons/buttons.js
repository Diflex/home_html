import {  
    Box, 
    Flex, 
    Button,
    HStack,
 } from '@chakra-ui/react';
 import { CiPlay1 } from "react-icons/ci";


const RoundButton = () =>{
    return(
        <Box >
            <Button bg='#A394F2' w='54px' h='54px' p={4} borderRadius='54px' color='black' as={CiPlay1} ></Button>
        </Box>
        

    )

};

export default RoundButton;