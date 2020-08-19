export const cartFilterSameItem = (cartItems, newCartItem) =>{
  const existingCartItem = cartItems.find(cartItem =>{
    return cartItem.id === newCartItem.id
  })
  if (existingCartItem){
    return (
      cartItems.map(cartItem =>{
        return(
          cartItem.id === existingCartItem.id ?
            {...cartItem, quantity : cartItem.quantity + 1} :
            cartItem
        )
      })
    )
  }

  return [...cartItems, {...newCartItem, quantity:1}]
} 