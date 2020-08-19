import React from 'react'
import './item-preview.styles.scss'
import {connect} from 'react-redux'

import {cartItemAdd} from '../../redux/cart/cart.actions'
import CustomButton from '../custom-button/custom-button.component'

const ItemPreview = ({item, cartItemAdd}) =>{
  const {name, price, imageUrl} = item

  return(
    <div className='item'>
      <div
        className='item-pic'
        style={{backgroundImage : `url(${imageUrl})`}}
      />
      <div className='item-footer'>
        <p className='item-name'>{name}</p>
        <p className='item-price'>{price}</p>
      </div>
      <CustomButton className='custom-button' onClick={() => cartItemAdd(item)}>ADD TO CART</CustomButton>
    </div>
  )
}

const mapDispatchToProps = dispatch =>({
  cartItemAdd : item => dispatch(cartItemAdd(item))
})
export default connect(null, mapDispatchToProps)(ItemPreview)