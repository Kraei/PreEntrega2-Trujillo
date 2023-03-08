import { useState } from "react";
import "./App.css";
import Checkout from "./components/Checkout";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import CartWidget from "./components/CartWidget";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <h1>Soulmate</h1>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />}/>
          <Route path='CartWidget' element={<CartWidget />}/>
          {/* <ItemDetailContainer/> */}

          {/* <Checkout/> */}
          {/* <CartWidget/> */}
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
