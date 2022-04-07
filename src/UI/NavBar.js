import React from "react";
import styles from "./NavBar.module.css";
import mainHomeLogo from "../assets/pizzaLogo.png";
import {BsCart4} from "react-icons/bs"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {useNavigate} from "react-router-dom"
import ContactUs from "../pages/contact-us/ContactUs";
const NavBar = ({setOpenModal,openModal , inCart , setInCart }) => {
  const showModal= () => {
    setOpenModal(true)
  }
  const imgN = useNavigate()
  return (

    <motion.header
      className={styles.NavDiv}
      transition={{ duration: 1.5, type: "tween" }}
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
     <img onClick={()=>{imgN('/')}}src={mainHomeLogo} alt="logo"></img>
      <div>
      <div onClick={showModal} className={styles.iconDiv}>
   <BsCart4 className={styles.cartIcon}>
      </BsCart4>
      <p></p>
   <span className={styles.iconSpan}> 
      </span>    
      </div>  
      <ul className={styles.NavUl}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu"> Menu</Link>
          </li>
          <li>
            <Link to="/about-us"> About Us</Link>
          </li>
          <li>
            <Link to="/contact-us"> Contact Us</Link>
          </li>
        </ul>
    
        
      </div>
    </motion.header>
  );
};

export default NavBar;
