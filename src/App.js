import "./App.css";
import React from "react";
import { useEffect, useState } from "react";


import {FaShoppingCart} from 'react-icons/fa'

import {Routes, Route,Link} from 'react-router-dom'


import Button from "./components/Button";
import Card from './components/Card';
import Footer from "./components/Footer";
import Home from './components/Home'
import About from "./pages/About";
import ShoppingList from "./pages/ShoppingList";



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
  };
 
  //Add to shopping list
  const addToShoppingList=(menuItem) =>{
    if (!shoppingList.includes(menuItem)) 
    {
      setTotal((Number(total)+menuItem.price).toFixed(2))
      setShoppingList([...shoppingList,menuItem])
      setMessage('')

    } else 
    {
      setMessage(`${menuItem.title.toUpperCase()} has already been added`)
    } 
  }
  //Remove from shopping list function
  const deleteFromShoppingList=(id, price)=>{
    const filteredList=shoppingList.filter(item=>item.id !==id)
    setTotal((Number(total)-price).toFixed(2))
    setShoppingList(filteredList)
  

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

           <Home total={total}/>

      <Routes>
        < Route path="/" element={
          <>
          <div className="btn-wrapper">
           <Button content={"All"} funct={displayAll} />
           <Button content={"Breakfast"} funct={funcBreakfast} />
           <Button content={"Lunch"} funct={funcLunch} />
           <Button content={"Shakes" }funct={funcShakes }/>
           <Button content={"Dinner"}  funct={funcDinner}/>
         </div>

         <div className="shopping-list">
        <Link to='/shoppinglist' style={{textDecoration:'none', padding:'20px',color:'rgb(126, 84, 6)' }} >
           <FaShoppingCart size={50}/>
        </Link>
         </div>
           
       
           <h1 className="message">{message}</h1>
      
      
        
          <div className="card-wrapper">    
          {activeMenu !== "" &&
          activeMenu.map((menu) => {
           
            return (
              <Card menu={menu} addToShoppingList={addToShoppingList}/> 
            );
          })}
          </div>
       
           </>
        }/>
        <Route exact path="/about/:title" element={
          <About menu={activeMenu}/>
        }/>
        <Route exact path="/shoppinglist/" element={
          <ShoppingList itemList={shoppingList} deleteFromShoppingList={deleteFromShoppingList}/>
        }/>
        <Route path="*" element={<h1>Page not found</h1>}/>
        
        
        
        </Routes>
        <Footer/>
        
      </div>
    );
  }


export default App;
