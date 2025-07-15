// dispach functions to call in html
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increament,decrement } from './app/counterSlice'
import Header from './Header'

const Counter = () => {
  const count = useSelector((state)=> state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
    <Header/>
    <div>
      <h1>T-shirt</h1>
      <h2>Size: Medium</h2>
      <button onClick={()=>dispatch(increament())}>Add to cart</button>
    </div>
    <div>
      <h1>T-shirt</h1>
      <h2>Size: Medium</h2>
      <button onClick={()=>dispatch(increament())}>Add to cart</button>
    </div>
    <div>
      <h1>T-shirt</h1>
      <h2>Size: Medium</h2>
      <button onClick={()=>dispatch(increament())}>Add to cart</button>
    </div>
    </>
  )
}

export default Counter
