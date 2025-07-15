// dispach functions to call in html
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increament,decrement } from './app/counterSlice'

const Counter = () => {
  const count = useSelector((state)=> state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(increament())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter
