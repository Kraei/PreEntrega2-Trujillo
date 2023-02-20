//import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import './App.css'
import Home from './components/Home';
import Catalogue from './components/Catalogue';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
  const siteName = 'Soulmate';
  const saludo = 'Bienvenido a Soulmate';
  
  return (
  <BrowserRouter>
   <>
      <h1>{siteName}</h1>
      <NavBar/>
      <Routes>
        <Route exact path='/' element = {<Home/>}/>
        <Route path='/catalogue' element = {<Catalogue/>}/>
        {/* <Route exact path="/catalogue" element={<ItemListContainer />} /> */}
        <Route
          exact
          path="/category/:category"
          element={<ItemListContainer />}
        />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
   </>
  </BrowserRouter>
  
  );
}

export default App
