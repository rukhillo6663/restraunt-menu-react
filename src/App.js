import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import {MdOutlineAttachMoney} from 'react-icons/md'



import Button from "./components/Button";
import Card from './components/Card';
import Footer from "./components/Footer";


const url =
  "https://gist.githubusercontent.com/maratgaip/44060c688fcf5f2b7b3985a6d15fdb1d/raw/e93c3dce0826d08c8c6e779cb5e6d9512c8fdced/restaurant-menu.json";

const App =()=> {
  const [data, setData]=useState('')
  const[activeMenu, setActiveMenu]= useState('')
  const [shoppingList, setShoppingList]= useState([])
  const [total, setTotal]=useState(0)
  const [message, setMessage]= useState('')
 
  useEffect(()=>{
    fetchData()
   },[])

   useEffect(()=>{
    setMessage('')
   },[activeMenu])

  //Fetch data from API
  const fetchData = async () =>{
   
      const promise = await fetch(url);
      const fetchData = await promise.json();
      setData( fetchData);
      setActiveMenu(fetchData)
      console.log(fetchData)
  };
 
  //Add to shopping list
  const addToShoppingList=(menuItem) =>{
    if(!shoppingList.includes(menuItem)){
      
       
      setTotal(Math.ceil(total+menuItem.price))
      setShoppingList([...shoppingList,menuItem])
      setMessage('')

    } else{
      setMessage(`${menuItem.title.toUpperCase()} already been added`)
    }
 
    
  }

  //Breakfast menu list
  const funcBreakfast = () => {
    setActiveMenu(data.filter((el) => el.category === "breakfast"),
    );
  };
  //Lunch menu list
  const funcLunch = () => {
    setActiveMenu(data.filter((el) => el.category === "lunch"))
  };
  //ALL menu display
  const displayAll=()=>{
    setActiveMenu(data)
  }
  //Shakes menu display
  const funcShakes = () => {
    setActiveMenu(data.filter((el) => el.category === "shakes"))
  }
  //Dinner Menu display
  const funcDinner = () => {
    setActiveMenu(data.filter((el) => el.category === "dinner"))
  }
   
    return (
      <div className="App">
        <h1 className="menu">Our Menu
        <hr></hr></h1>
       
        
        
        <div className="btn-wrapper">
        <Button content={"All"} funct={displayAll} />
        <Button content={"Breakfast"} funct={funcBreakfast} />
        <Button content={"Lunch"} funct={funcLunch} />
        <Button content={"Shakes" }funct={funcShakes }/>
        <Button content={"Dinner"}  funct={funcDinner}/>
        </div>
        <div class="total-money">  Total:<MdOutlineAttachMoney size={35} style={{color:' rgb(126, 84, 6)'}}/>{total}</div>
        <h1 className="message">{message}</h1>
      
      
        {/* <Card cardData={this.state.data} /> */}
       <div className="card-wrapper">    
        {activeMenu !== "" &&
          activeMenu.map((menu) => {
           
            return (
              <Card menu={menu} addToShoppingList={addToShoppingList}/> 
            );
          })}
        </div>
        
        <Footer/>
        
      </div>
    );
  }


export default App;
