import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./Navbar.css";
const Navbar = () => {
  const [navMobileOpen , setNavMobileOpen] = useState(false)
return <nav className="nav">
   { 
   navMobileOpen ?
    <MdOutlineRestaurantMenu onClick={()=>{
setNavMobileOpen(!navMobileOpen)}} size="1.3rem" className="nav__hamberger-Icon"  />:
 <GiHamburgerMenu onClick={()=>{
setNavMobileOpen(!navMobileOpen)}} size="1.3rem" className="nav__hamberger-Icon" />} 
    <div className="nav__logo">Gerícht</div>

    <span className={!navMobileOpen ? "nav__span" : 'nav__span-mobile'} >
      <div className="nav__links">
        <a href="#">Home</a>
        <a href="#">Pages</a>
        <a href="#">Contact Us</a>
        <a href="#">Blog</a>
        <a href="#">Landing</a>
      </div>
      <div className="nav__Log-in"> <a>Log in / registration</a> </div>
    </span>
  </nav>
}
  

   


export default Navbar;
