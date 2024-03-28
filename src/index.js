import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import './buttons.css';
import App from './components/app/App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);


