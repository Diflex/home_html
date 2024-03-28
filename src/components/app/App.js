/* eslint-disable no-lone-blocks */

import WebXPanel, { isActive, getVersion, getBuildDate } from '@crestron/ch5-webxpanel';
import { useCrestronPublishAnalog, useCrestronSubscribeAnalog, useCrestronDigitalCollection } from '@norgate-av/react-crestron-ch5-hooks';
import React, { useState } from 'react';
import Header  from '../header/Header';
import Footer from '../footer/Footer';
import Main from '../pages/main/Main';
import { Box, Flex, Stack,VStack, HStack } from '@chakra-ui/react';

import { useCounter } from '../stores/store';
import { Button, Drawer, DrawerContent, DrawerOverlay, useDisclosure, DrawerHeader,DrawerBody, DrawerFooter } from '@chakra-ui/react';
import { useRef } from 'react';
// import './app.css';






//#region WebXPanel
//const WebXPanel = require('@crestron/ch5-webxpanel');
const configuration = {
  host: '10.15.1.53', // defaults to window.location.host
  //host: '192.168.0.95', // defaults to window.location.host
  ipId: '0x03', // string representing a hex value. Might contain "0x" or not. Defaults to "0x03"
  port: '49200' // websocket port set on the processor
};

//check if running as a web panel before initializing the connection - if (WebXPanel.isActive) {
if (isActive) {
console.log(`WebXPanel isActive!`);
console.log(`WebXPanel version: ${getVersion()}`);
console.log(`WebXPanel build date: ${getBuildDate()}`);

WebXPanel.initialize(configuration);
}
else {
console.log('Skipping WebXPanel since running on touchpanel');
}
//#endregion

const App = ()=> {
const [currentMenu, setCurrentMenu] = useState(0);

const menu = (data) =>{setCurrentMenu(data);};

//#region setActiveSource
const setActiveSource = (data) =>{
switch (data) {
  case 1:
    signal51.action.push();
    signal51.action.release();
  break;
  case 2:
    signal52.action.push();
    signal52.action.release();
  break;
  case 3:
    signal53.action.push();
    signal53.action.release();
  break;
  case 4:
    signal54.action.push();
    signal54.action.release();
  break;
  case 5:
    signal55.action.push();
    signal55.action.release();
  break;
  case 6:
    signal56.action.push();
    signal56.action.release();
  break;
  case 7:
    signal57.action.push();
    signal57.action.release();
  break;
  case 8:
    signal58.action.push();
    signal58.action.release();
  break;

  default:
  // 
  break;
  }
};
const [signal51, signal52, signal53, signal54, signal55, signal56, signal57, signal58] = useCrestronDigitalCollection(["51", "52", "53", "54", "55", "56", "57", "58"]);  
let selectedSource;
if(signal51.state.value) selectedSource = 1;
else if(signal52.state.value) selectedSource = 2;
else if(signal53.state.value) selectedSource = 3;
else if(signal54.state.value) selectedSource = 4;
else if(signal55.state.value) selectedSource = 5;
else if(signal56.state.value) selectedSource = 6;
else if(signal57.state.value) selectedSource = 7;
else if(signal58.state.value) selectedSource = 8;
else  selectedSource = 0;


//#endregion




const [signal92, signal93, signal94, ] = useCrestronDigitalCollection(["92", "93", "94"]);  







//#region Volume ВКС Main
const setVolumeVCSMuteActive = (data) =>{
  signal94.action.push();
  signal94.action.release();
};
let volumeVCSMuteisActive;
if(signal94.state.value) {volumeVCSMuteisActive = true;}

const volumeVCSUp = (data) =>{
  signal92.action.push();
  signal92.action.release();
};
const volumeVCSDown = (data) =>{
  signal93.action.push();
  signal93.action.release();
};
//#endregion


//#region ZUSTAND
// const {isOpen, onOpen, onClose} = useDisclosure();
// const btnRef = useRef();
// const num = useCounter(state => state.number);
// const increaseNum = useCounter(state => state.increaseNum);
// const decreaseNum = useCounter(state => state.decreaseNum);
// const resetNum = useCounter(state => state.resetNum);
//#endregion




  return (
    <div id="container">
      {/* <Header menu={menu}/> */}

      {/* {(currentMenu=== 0) && <Main setActiveSource={setActiveSource} />}  */}




<Main />
      

      {/* <Footer menu={menu} currentMenu={currentMenu}/> */}

    {/* <h1>Zustand test</h1>
      <div>{num}</div>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>change</Button>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size='lg'>
        <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>Select</DrawerHeader>
            <DrawerBody>
              <Button onClick={increaseNum}>Increase</Button>
              <Button onClick={decreaseNum}>Decrease</Button>
              <Button onClick={resetNum}>resetNum</Button>
            </DrawerBody>

            <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
          </DrawerContent>
      </Drawer> */}
    </div>
  );
}

export default App;
