import React  from 'react'
import styles from "./Contact-us.module.css"
const ContactUs = () => {


          document.body.style.overflow = "hidden"   
           document.body.style.backgroundImage= "none"         
          document.body.style.backgroundColor= "white"
        
 
  return (
     <div style={{display:'flex' }}>
    <img  style={{width:'40%'}} src='https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?size=626&ext=jpg' alt="pizza" ></img>
    <div> 
    
    <div  className={styles['contact-div']}>
    <h2> Contact-Us </h2>
      </div> </div></div>
  )
}

export default ContactUs