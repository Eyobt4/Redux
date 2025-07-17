// show mapped list of items in home page
import React from 'react'
import Header from '../Header';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from '../app/counterSlice';
import { Link } from 'react-router-dom';


const Home = () => {
    const items = [{title:"T-shirt",size:"Medium",id:1,price:20},{title:"shirt",size:"Small",id:2,price:200},{title:"Trouser",size:"Large",id:3,price:100}];
    const dispatch = useDispatch();
  return (
    <div>
        <Header/>

       <div style={{display:"flex", justifyContent:"space-between", width:"50%"}}>
            {items.map(i=>{
                return(<div>
                    <h1>{i.title}</h1>
                    <h2>{i.size}</h2>
                    <h3>{i.price}</h3>
                    <button onClick={()=>dispatch(AddToCart(i))}><Link>Add to Cart</Link></button>
                </div>)
            })}
            
        </div>
    </div>
  )
}

export default Home
