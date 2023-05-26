import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';

import { FaShoppingCart } from 'react-icons/fa';
import { GrNotes } from 'react-icons/gr';

import { Routes, Route, Link } from 'react-router-dom';

import Button from './components/Button';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';

import About from './pages/About';
import ShoppingList from './pages/ShoppingList';
import WishList from './pages/WishList';

const url =
  'https://gist.githubusercontent.com/maratgaip/44060c688fcf5f2b7b3985a6d15fdb1d/raw/e93c3dce0826d08c8c6e779cb5e6d9512c8fdced/restaurant-menu.json';

const App = () => {
  const [data, setData] = useState('');
  const [activeMenu, setActiveMenu] = useState('');
  const [shoppingList, setShoppingList] = useState([]);
  const [total, setTotal] = useState(0);
  const [message, setMessage] = useState('');
  const [categories, setCategories] = useState([]);
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setMessage('');
  }, [activeMenu]);

  //Fetch data from API
  const fetchData = () => {
    try {
      fetch(url)
        .then(promise => promise.json())
        .then(datas => {
          setData(datas);
          setActiveMenu(datas);
          //storing unique categories in the state
          setCategories(['all', ...new Set(datas.map(el => el.category))]);
        });
    } catch (error) {
      console.log(error);
    }
  };

  //Add to shopping list
  const addToShoppingList = menuItem => {
    if (!shoppingList.includes(menuItem)) {
      //sum the price of added items
      setTotal((Number(total) + menuItem.price).toFixed(2));
      setShoppingList([...shoppingList, menuItem]);
      setMessage('');
    } else {
      //Message if item already been added
      setMessage(`${menuItem.title.toUpperCase()} has already been added`);
    }
  };
  //Add to your wish list
  const addToWishList = menuItem => {
    if (!wishList.includes(menuItem)) {
      setWishList([...wishList, menuItem]);
      setMessage('');
    } else {
      //Message if item already been added
      setMessage(`${menuItem.title.toUpperCase()} has already been added`);
    }
  };
  //Remove from shopping list function
  const deleteFromShoppingList = (id, price) => {
    const filteredList = shoppingList.filter(item => item.id !== id);
    if (window.confirm('Are you sure you want to delete?')) {
      //Substract price of removed item from the total
      setTotal((Number(total) - price).toFixed(2));
      setShoppingList(filteredList);
    }
    //Substract price of removed item from the total
    setTotal((Number(total) - price).toFixed(2));
    setShoppingList(filteredList);
  };

  //Delete from the wishlist
  const deleteFromWishList = id => {
    const filtered = wishList.filter(item => item.id !== id);
    setWishList(filtered);
  };

  //Display only filtered menu
  const handleFilter = e => {
    if (e.target.name === 'all') {
      setActiveMenu(data);
    } else {
      setActiveMenu(data.filter(el => el.category === e.target.name));
    }
  };

  return (
    <div className="App">
      <Header total={total} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="btn-wrapper">
                {categories.length &&
                  categories.map((el, index) => {
                    const text = el.charAt(0).toUpperCase() + el.slice(1);
                    return (
                      <Button
                        content={text}
                        funct={handleFilter}
                        name={el}
                        key={index}
                      />
                    );
                  })}
              </div>

              <div className="shopping-list">
                <Link to="/wishlist" className="shopping-list-item">
                  <GrNotes />
                </Link>
                <Link to="/shoppinglist" className="shopping-list-item">
                  <FaShoppingCart />
                </Link>
              </div>
              <h1 className="message">{message}</h1>
              <div className="card-wrapper">
                {activeMenu !== '' &&
                  activeMenu.map((menu, index) => {
                    return (
                      <Card
                        menu={menu}
                        addToShoppingList={addToShoppingList}
                        addToWishList={addToWishList}
                        key={index}
                      />
                    );
                  })}
              </div>
            </>
          }
        />
        <Route path="/info/:title" element={<About menu={activeMenu} />} />
        <Route
          path="/shoppinglist/"
          element={
            <ShoppingList
              itemList={shoppingList}
              deleteFromShoppingList={deleteFromShoppingList}
            />
          }
        />
        <Route
          exact
          path="/wishlist/"
          element={
            <WishList
              wishList={wishList}
              deleteFromWishList={deleteFromWishList}
            />
          }
        />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
