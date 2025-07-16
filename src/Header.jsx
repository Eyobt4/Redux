import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {BrowserRouter,Routes, Route, Link } from 'react-router-dom';

const Header = () => {
const cart = useSelector((state)=> state.counter.cart);
  return (
    <div style={{display: "flex", justifyContent: "space-between", width: "80vw",  padding: "20px"}}>
      <h1>My cart</h1>
      <Link to={"/cart"}> Cart {cart.length}</Link>
    </div>
  )
}

export default Header
