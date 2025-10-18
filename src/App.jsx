import { useState } from 'react'
import './App.css'
import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import LoginSignup from './Pages/LoginSignup'
import Shop from "./Pages/Shop";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Kids from "./Pages/Kids";
import Product from './Pages/Product';
import ProductId from './Pages/ProductId';
import Cart from './Pages/Cart';



function App() {


  return (
    <>  
  <BrowserRouter>
<Navbar/>
  <Routes>
    <Route path='/' element={<Shop/>}></Route>
      <Route path='/men' element={<Men/>}></Route>
      <Route path='/women' element={<Women/>}></Route>
      <Route path='/kids' element={<Kids/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/productId' element={<ProductId/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='login' element={<LoginSignup/>}></Route>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
