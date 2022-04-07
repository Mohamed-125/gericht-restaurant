import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p> Pizza Shop </p>{" "}
      <div className={styles.icons}>
        <FaFacebookSquare size="5rem" className={styles.faceIcon} />
        <FaInstagram size="5rem" className={styles.faceIcon} />
        <FaLinkedin size="5rem" className={styles.faceIcon} />
        <FaTwitter size="5rem" className={styles.faceIcon} />
      </div>
    </footer>
  );
};

export default Footer;
