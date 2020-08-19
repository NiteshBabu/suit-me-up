import {CartActionTypes} from './cart.action.types'
import {cartFilterSameItem} from './cart.utils'

const INITAL_STATE = {
  hidden : true,
  cartItems : []
}

const cartReducer = (state=INITAL_STATE, action)  =>{
  switch(action.type){
    case CartActionTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden : !state.hidden
      }

    case CartActionTypes.ADD_TO_CART:
      return{
        ...state,
        cartItems : cartFilterSameItem(state.cartItems, action.payload)
      }
    default : 
      return state
  }
}

export default cartReducer