import React from 'react'

import './cart-item.styles.scss'

const CartItem = ({item : {name, price, quantity, imageUrl}}) =>(
  <div className='cart-item'>
    <div className='item-pic'>
      <img src={imageUrl} alt={`${name}.pic`}/>
    </div>
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity} x ${price}</span>
    </div>
  </div>
)

export default CartItem