import styles from "./homePage.module.css";
import React ,{ useState , useEffect , useContext} from "react";
import HomeImage from "../../assets/pizza.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const HomePage = () => {
  const navigate = useNavigate();


  document.body.style.overflow = "hidden"   
  document.body.style.backgroundImage= "none"         
 document.body.style.backgroundColor= "white"

  return (
    <>
      <motion.div className={styles.homeDiv}>
        <motion.h1
          transition={{ duration: 1 }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {" "}
          Pedro's Pizza
        </motion.h1>
        <motion.p
          transition={{ duration: 1 }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={styles.homeP}
        >
          Pizza For Every One{" "}
        </motion.p>
        <motion.button
          transition={{ duration: 1 }}
          initial={{ opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          onClick={() => navigate("/menu")}
          className={styles.homeButton}
        >
          Order Your Pizza
        </motion.button>
        <motion.img
          transition={{ duration: 1 }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={styles.homeImage}
          src={HomeImage}
          alt="HomePageImage"
        ></motion.img>
      </motion.div>{" "}
    </>
  );
};

export default HomePage;
