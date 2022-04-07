import React , { useState,  useEffect, useRef} from 'react'
import styles  from './search.module.css'
const Search = ({meals ,filteredMeals,setFilteredMeals}) => {
    const inputRef = useRef(null)
   const [search , setSearch] = useState('')



const changeHandler = (e) => {  
        e.preventDefault() 
         if (search === ""){ 
        setFilteredMeals(meals)
    }
if (e.target.value !== "")
      setFilteredMeals(meals.filter(meal => meal.name.toLowerCase().trim().includes( e.target.value.toLowerCase().trim()))  )
    }
  return (
    <div className={styles.search}><input type="text" placeholder="search for your Pizza!!" ref={inputRef} 
    
    onChange={changeHandler}
    
    
    /></div>
  )
}

export default Search