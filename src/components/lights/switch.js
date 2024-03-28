import { 
    Component, 
    Box, 
    Flex, 
    Stack, 
    VStack, 
    HStack, 
    Container, 
    Heading, 
    Button,
    Text,
 } from '@chakra-ui/react';

 import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Switch 
  } from '@chakra-ui/react';
import RoundButton from '../buttons/buttons.js';
import { CiPlay1 } from "react-icons/ci";
import { useState } from 'react';





const NonDim = ({name}) =>{
    const [sliderValue, setSliderValue] = useState(50);



    
    return(
        <Flex bg='#F0F1F7' w='191px' h='140px' p={0} borderRadius='40px'>
            <VStack w='full' h='full' gap={0}>
                <HStack 
                    //border='red 1px solid'                    
                    w='full'  
                    h='87px'  
                    pr={5} 
                    pl={5} 
                    alignItems='center'
                    justifyContent='space-between'
                    >
                

                        <Text fontSize="xl" align='left'>{name}</Text>

                        <svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.4249 13.7083C25.997 13.7083 26.8312 11.8504 25.787 10.675C25.1617 9.66947 24.5371 8.31093 23.8893 6.90197L23.8893 6.90194C22.8446 4.62973 21.7396 2.22639 20.4743 0.961055C19.8589 0.345701 19.0243 0 18.1541 0H8.09597C5.69912 0 4.10322 3.4994 2.68457 6.61014C1.92565 8.27425 1.21746 9.82713 0.464513 10.6735C-0.581112 11.849 0.253055 13.7083 1.8266 13.7083L24.4249 13.7083ZM21.0006 9.625C21.0006 10.1082 20.6088 10.5 20.1256 10.5C19.6423 10.5 19.2506 10.1082 19.2506 9.625C19.2506 9.14175 19.6423 8.75 20.1256 8.75C20.6088 8.75 21.0006 9.14175 21.0006 9.625ZM11.3756 8.75C10.8924 8.75 10.5006 9.14175 10.5006 9.625C10.5006 10.1082 10.8924 10.5 11.3756 10.5H16.6256C17.1088 10.5 17.5006 10.1082 17.5006 9.625C17.5006 9.14175 17.1088 8.75 16.6256 8.75H11.3756Z" fill="#33343B"/>
                            <rect x="3.50098" y="15.75" width="1.75" height="5.25" fill="#33343B"/>
                            <rect x="12.251" y="15.75" width="1.75" height="5.25" fill="#33343B"/>
                            <rect x="21.001" y="15.75" width="1.75" height="5.25" fill="#33343B"/>
                        </svg>


                        

                    
                    {/* <RoundButton /> */}
                </HStack>
                
                <HStack 
                //border='black 1px solid'
                w='full' h='87px'  
                pr={5} 
                pl={5}
                alignItems='center'
                justifyContent='space-between'
                > 
                <Text fontSize="sm">Прихожая</Text>
                <Switch size={['sm', "md", "md"]} colorScheme='purple'/>
                </HStack>
            </VStack>
        </Flex>
    )
};

export default NonDim;





