import React from 'react'
import { BsFillCartCheckFill } from 'react-icons/bs';

const CartWidget = () => {
  return (
    <div>
        <BsFillCartCheckFill color='blue' size="25px" /><span>5</span>
    </div>
  )
}

export default CartWidget