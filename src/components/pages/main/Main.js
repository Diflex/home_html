// import image1 from '../../../resources/images/screen1.png';

//import {  useCrestronDigitalCollection, useCrestronPublishAnalog, useCrestronSubscribeAnalog } from '@norgate-av/react-crestron-ch5-hooks';
// import { CiPlay1, CiStop1 } from "react-icons/ci";
// import Slider from '@mui/material/Slider';
// import SourceThinkClientAct from '../../../resources/images/Source Think client act.png';
import { useState } from 'react';

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
    Text
 } from '@chakra-ui/react';
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react';

  import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
  } from '@chakra-ui/react';

import IconGear from '../../icons/icons';
import Dimmer from '../../lights/dimmer';
import NonDim from '../../lights/switch';
import './main.css';


const Main = ({ setActiveSource, selectedSource, 
    


     
}) => {


//#region Publish Events
//const [signal40, signal246, signal247, signal124, signal125, signal126, signal127, signal128, signal129] = useCrestronDigitalCollection(["40", "246", "247", "124", "125", "126", "127", "128", "129"]);

//#endregion


    return(

    <Container maxW="container.xl" p="0">
        <Flex h='100vh' py={20}>
            <VStack 
                w='full'   
                h='full' 
                p={10} 
                alignItems='center'
            >
                <HStack
                    w='full'   
                    p={10} 
                    alignItems='center'
                    justifyContent='space-between'
                >
                    <Heading size='md'>Сценарии</Heading>
                    <IconGear />
                </HStack>




                <Button bg='#F0F1F7' size='lg'>Я ушел</Button>
                <Button bg='#F0F1F7' size='lg'>Я дома</Button>
            </VStack>
            <VStack 
                w='full'   
                h='full' 
                p={10} 
                alignItems='flex-start'
                bg='gray.50'
            >

            <Dimmer />
            <HStack>
                <NonDim name='Люстра'/>
                <NonDim name='Бра'/>

            </HStack>
  
                






                

            </VStack>

        </Flex>

    </Container>








    // <AnimatedPages>
        // <div className="main">
        //     <div className='main-body'>

        //     </div>
        // </div>
    // </AnimatedPages>
    )
}


export default Main;