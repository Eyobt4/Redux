import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Cart = () => {
  const items = useSelector((state)=> state.counter.cart);
  return (

    <div>
      
      <Link to={"/"}><button>Return</button></Link>
      <h1>The Cart</h1>
      <div style={{display:"flex", justifyContent:"space-between", width:"50%"}}>
                  {items.map(i=>{
                      return(<div>
                          <h1>{i.title}</h1>
                          <h2>{i.size}</h2>
                          <h3>{i.price}</h3>
                          <button onClick={()=>dispatch(AddToCart(i))}><Link>Remove Item</Link></button>
                      </div>)
                  })}
              </div>
    </div>

    
  )
}

export default Cart
