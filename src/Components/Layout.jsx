import React,{useRef,useState} from 'react'
import Display from './Display';

function Layout() {
    const  nameref=useRef();
    const desref=useRef();
    const priceref=useRef();
   
    const[objarr,Setobjarr]=useState([]); 

    const submitHandler=()=>{
      const obj={
        name:nameref.current.value,
        descri:desref.current.value,
        price:priceref.current.value
    }
      Setobjarr(obj)
        console.log(obj)
        nameref.current.value="";
        desref.current.value="";
        priceref.current.value="";
  }
  return (
    <React.Fragment>
        <label> Candy Name</label>
        <input type="text" ref={nameref}></input>
         
         <label>Enter Description</label>
         <input type="text" ref={desref}></input>

         <label>Enter Price</label>
         <input type="number" ref={priceref}></input>

         <button onClick={submitHandler}>Add</button>
        
    </React.Fragment>
  )
}

export default Layout