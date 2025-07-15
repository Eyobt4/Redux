import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

const Header = () => {
const count = useSelector((state)=> state.counter.count);
  return (
    <div>
      <h1>My cart</h1>
      <button>cart {count}</button>
    </div>
  )
}

export default Header
