import React , {useEffect, useState} from 'react'
import styles from "./Modal.module.css"
const Modal = ({setOpenModal,openModal , inCart , setInCart }) => {
    const [qty , setQty] = useState('')
const [totalPrices , setTotalPrices] = useState('') 
const [value , setValue] = useState('')
const [update , setUpdated] = useState(false)
    let qtyS =  inCart.reduce( (total , item)=>{return  total+=item.qty} ,0)
let totalPrice= inCart.reduce( (total , item)=> {return total+=item.price*item.qty},0)

// if (openModal) {
//     document.body.style.backgroundColor="rgba(0, 0, 0, 0.918)"
// } 

useEffect(()=>{
    setQty(qtyS)
    setTotalPrices(totalPrice)
},[inCart])

const deleteHandler =(item) => {
    setInCart(inCart.filter(x => x.id !== item.id))   
}

const decrement = (item) => { 
if(item.qty > 0){
    item.qty -=1
    setUpdated(!update)
}
if( item.qty ===0){
    setInCart(inCart.filter(x => x.id !== item.id))   

}
}

const  arr =[{name:"gfg"} , {age:4}]
console.log( typeof inCart.length)
const increment = (item) => { 
item.qty+=1
setUpdated(!update)
}
 return (
     <div className={styles.big}>
    <div onClick={()=>{setOpenModal(false)}} className={styles.background}></div>
    <div className={styles.modalDiv}>
       
      {!inCart.length? <p> there is no items in the cart</p> : 
<>
    <p> total item in the cart   = {qtyS}</p>
      <button  className={styles.clear } onClick={()=>{setInCart([])}}> Clear Cart </button>
      <p className={styles.totalPrice}> total price  = {totalPrice}$  </p><button className={styles.order}>
order and CheckOut 
   </button>
    {inCart.map( item => 
    <div key={item.id} className={styles.modalComponents}>
        <p> name: {item.name}</p>
        <p> price per one : {item.price}$</p>
        <p> the total price for this product: {item.price*item.qty}$</p>
        
        <p> quantity:{item.qty}</p>
        <button  className={styles.addButton} onClick={()=>increment(item)}> + </button>
        <button  className={styles.minusButton} onClick={()=> decrement(item)}> -</button>
        <button onClick={()=>deleteHandler(item)} className={styles.deleteButton}> delete</button>
    </div>) 
   }  </>
    }


    </div>
</div>
 )
}

export default Modal