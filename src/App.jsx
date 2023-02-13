//import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import './App.css'
import Home from './components/Home';
import About from './components/About';

const App = () => {
  const siteName = 'Soulmate';
  
  return (
  <BrowserRouter>
   <>
      <h1>{siteName}</h1>
      <NavBar/>
      <Routes>
        <Route exact path='/' element = {<Home/>}/>
        <Route exact path='/' element = {<About/>}/>
        <Route exact path='/' element = {<ItemListContainer/>}/>
        
      </Routes>
   </>
  </BrowserRouter>
  );
}

export default App
