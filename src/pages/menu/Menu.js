import React , { useState ,   useEffect} from "react";
import pepperoni from "../../assets/pepperoni.jpg";
import margherita from "../../assets/margherita.jpg";
import Meat from "../../assets/expensive.jpg";
import pineapple from "../../assets/pineapple.jpg";
import pedro from "../../assets/pedrotechspecial.jpg";
import styles from "./Menu.module.css";
import Search from "../../UI/Search";
const meals = [
  {
    name: "Meat and chicken",
    price: 28,
    image: Meat,
    id:Math.random()*10000

  },
  {
    name: "Margherita",
    price: 20,
    image: margherita,
    id:Math.random()*10000

  }, {
    name: "Pepperoni",
    price: 15,
    image: pepperoni,
   id:Math.random()*10000
  }
  ,
  {
    name: "Pedro Special",
    price: 35,
    image: pedro,
    id:Math.random()*10000

  },{
    name: "Pineapple",
    price: 18,
    image: pineapple,
    id:Math.random()*10000

  } , 
 
];
const Menu = ({inCart, setInCart}) => {

  useEffect(()=>{  
    setFilteredMeals(meals.slice())
},[])

const [filteredMeals  ,  setFilteredMeals ]= useState([])
const [update  ,  setUpdate ]= useState(true)
const addToCart =(meal ,e) =>  {
    inCart.find(item => item.id === meal.id ) ? inCart.map(item =>  {
      item.qty+=1
    }) :setInCart([...inCart , {
    name:meal.name,
    price:meal.price, 
    id:meal.id,
  qty:1
}])


}

const sortHandler = (e) => {
if( e.target.value === "all"){
     setFilteredMeals(meals.slice())
     setUpdate(!update)
     
 }
if (e.target.value === "sort by highest price ") { 
  setFilteredMeals(filteredMeals.sort( (a,b) => { return b.price  - a.price}))
setUpdate(!update)

}
if (e.target.value === "sort by lower price ") { 

  setFilteredMeals(filteredMeals.sort( (a,b) => { return a.price  - b.price}))
setUpdate(!update)

}
}

  document.body.style.overflow = "auto"   
  document.body.style.backgroundImage= "none"         
 document.body.style.backgroundColor= "#292723"

  return (  
    <>
      <section className={styles.MealsSection}>

        <h2 style={{ fontweight: "thin", fontStyle: "italic" }}> Our Menu</h2>
      <Search  style={{ margin:'0 auto'}}filteredMeals={filteredMeals} setFilteredMeals={setFilteredMeals} meals={meals}/>
      <select className={styles["select-menu"]} onClick={sortHandler}>
        <option  value='all' > All </option>
        <option  value='sort by lower price ' > lower price first </option>
        <option  value='sort by highest price ' > highest price first </option>
      </select>
    { !filteredMeals.length && <p className={styles.noItems}>there is no pizza with this name</p>}
        {filteredMeals.map((meal) => (
          
          <div  key={meal.id}          className={styles.mealDiv}>
             <div className={styles.mealProperties}>
              <h3 className={styles.mealName}> {meal.name} </h3>
              <p className={styles.mealPrice}>{meal.price}$</p>
              <button className={styles.addToCartBtn}onClick={(e) => addToCart(meal ,e )}>Add to cart </button>
            </div>
            <img 
              className={styles.mealImage}
              src={meal.image}
              alt={meal.name}
            ></img>
          </div>
         
           
        ))}  

      </section>
    </>
  );
};

export default Menu;
