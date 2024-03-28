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





const Dimmer = () =>{
    const [sliderValue, setSliderValue] = useState(50);
    const [topLeftRadius, setTopLeftRadius]  = useState();
    const [bottomLeftRadius, setBottomLeftRadius]  = useState();
    const [topRightRadius, setTopRightRadius]  = useState();
    const [bottomRightRadius, setBottomRightRadius]  = useState();


    const setSlider = (val) =>{
        setSliderValue(val);
        if(val < 5) 
        {
            setTopLeftRadius(0);
            setBottomLeftRadius(0);
        } else 
        {
            setTopLeftRadius(30);
            setBottomLeftRadius(30);
        }

        if(val > 95) 
        {
            setTopRightRadius(0);
            setBottomRightRadius(0);
        } else 
        {
            setTopRightRadius(30);
            setBottomRightRadius(30);
        }


    };
    return(
        <Flex bg='#F0F1F7' w='386px' h='175px' p={0} borderRadius='40px'>
            <VStack w='full' h='full'>
                <HStack 
                    //border='red 1px solid'                    
                    w='full'  h='87px'  
                    pr={5} 
                    pl={5} 
                    alignItems='center'
                    justifyContent='space-between'>
                    <VStack 
                        alignItems='flex-start'
                        //border='red 1px solid'
                        >
                        <Text fontSize="xl" align='left'>Люстра</Text>
                        <Text fontSize="sm">Прихожая</Text>
                    </VStack>
                    <Switch size='lg' colorScheme='purple'/>
                    {/* <RoundButton /> */}
                </HStack>
                
                <HStack 
                //border='black 1px solid'
                w='full' h='87px'  
                pr={0} 
                pl={10}> 
                    <Slider onChange={(val) => setSlider(val)}                  
                         w='310px'   
                         p={0} 
                        aria-label='slider-ex-2' 
                        defaultValue={0} >
                        <SliderTrack 
                            bg='purple.100' 
                            h='55px' 
                           borderTopLeftRadius={topLeftRadius}
                           borderBottomLeftRadius={bottomLeftRadius}
                           borderTopRightRadius={topRightRadius}
                           borderBottomRightRadius={bottomRightRadius}
                            >
                            <SliderFilledTrack bg='linear-gradient(90deg, rgba(163, 148, 242, 0) 0%, #A394F2 100%);' />
                        </SliderTrack>
                        <SliderThumb boxSize='55px' bg='#A394F2' border='solid 1px #A394F2'>
                            <Box color='white' >{sliderValue}%</Box>
                        </SliderThumb>
                    </Slider>
                </HStack>
            </VStack>
        </Flex>
    )
};

export default Dimmer;





