import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Homepage from './Homepage';
import {Routes, Route } from 'react-router-dom';
import Character from './Character';
import Music from './Music';
import Fashion from './Fashion';
import Movies from './Movies';
import Sports from './Sports';


function App() {
  return (
    <>
    <ChakraProvider>
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/Character' element={<Character />}/>
      <Route path='/Music' element={<Music />}/>
      <Route path='/Fashion' element={<Fashion />}/>
      <Route path='/Movies' element={<Movies />}/>
      <Route path='/Sports' element={<Sports />}/>
    </Routes>
    </ChakraProvider>
    </>
  );
}

export default App;
