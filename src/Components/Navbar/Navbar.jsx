import React, { useState } from "react";
import "./Navbar.css"
import logo from "../Assets/logo.png"
import cartIcon from "../Assets/cart_icon.png"
import { Link } from "react-router-dom";
function Navbar(){

let [menu, setMenu]=useState("shop");


    return(
<div className="navbar border-0.3 rounded-lg bg-pink-400 flex items-center justify-between px-1 sm:mx-0 py-2 text-shadow-amber-500 h-[70px]  w-[98vw] mb-[1px]  ">
  {/* Logo Section */}
  <div className="nav-logo flex items-center gap-1">
    <img src={logo} alt="Logo" className="h-8 w-auto" />
    <p className="text-5xl font-bold text-gray-800">eKart</p>
  </div>

  {/* Menu Section */}
  <ul className="nav-menu  flex gap-1 text-black-300 text-[30px] font-medium">

    <li onClick={()=>{setMenu("shop")}} className=" hover:text-white cursor-pointer hover:bg-amber-500 p-1 rounded-lg">
       <Link to="/"> Shop </Link>{menu=="shop"&&<hr/>}</li>
    <li onClick={()=>{setMenu("men")}} className="hover:text-white cursor-pointer hover:bg-amber-500 p-1 rounded-lg">
       <Link to='/men'>Men </Link> {menu=="men"&&<hr/>}</li>
    <li onClick={()=>{setMenu("women")}} className="hover:text-white cursor-pointer hover:bg-amber-500 p-1 rounded-lg">
        <Link to='/women'>Women </Link>{menu=="women"&&<hr/>}</li>
    <li onClick={()=>{setMenu("kids")}} className="hover:text-white cursor-pointer hover:bg-amber-500 p-1 rounded-lg">
        <Link to='/kids'>Kids</Link> {menu=="kids"&&<hr/>}</li>
  </ul>

  {/* Login & Cart Section */}
<div className="nav-login-cart flex items-center gap-5 relative ">
 <Link to="/login"> <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">Login</button></Link>
  <div className="relative right-2 bg-white/30 backdrop-blur-md p-2 rounded-full border border-white/20 shadow-sm">
   <Link className=" w-8 h-8 " to="/cart"> <img src={cartIcon} alt="Cart"  /></Link>
    <div className="nav-cart-count w-[25px] h-[25px] absolute top-[-8px] right-[-12px] bg-red-600 rounded-full p-[2px] text-white flex items-center justify-center">0</div>
  </div>
</div>

</div>

    )
}
export default Navbar