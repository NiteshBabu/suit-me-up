import React from 'react'
import {ReactComponent as Icon} from './shopping-bag.svg'
import {connect} from 'react-redux'

import './cart-icon.styles.scss'
import {toggleCartDropdown} from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from '../../redux/cart/cart.selector'

const CartIcon = ({toggleCartDropdown, itemCount}) =>{
  return(
    <div className='cart' onClick={toggleCartDropdown}>
      <Icon className='icon'/>
      <span className='item-count'> {itemCount} </span>
    </div>
  )
}

const mapStateToProps = state =>({
  itemCount : selectCartItemsCount(state) 
})

const mapDispatchToProps = dispatch =>({
  toggleCartDropdown : () => dispatch(toggleCartDropdown())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)