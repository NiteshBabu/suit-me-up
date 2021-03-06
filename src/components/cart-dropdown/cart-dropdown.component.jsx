import React from 'react'
import {connect} from 'react-redux'

import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'


const CartDropdown = ({cartItems}) =>{
 return(
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)}
    </div>
    <CustomButton className='button'>Proceed</CustomButton>
  </div>
  )
}

const mapStateToProps = ({cart : {cartItems}}) =>({
  cartItems, 
})
export default connect(mapStateToProps)(CartDropdown)