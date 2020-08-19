import {CartActionTypes} from './cart.action.types'

export const toggleCartDropdown = () => ({
  type : CartActionTypes.TOGGLE_CART_DROPDOWN
})

export const cartItemAdd = item => ({
  type : CartActionTypes.ADD_TO_CART,
  payload : item
})