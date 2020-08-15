import React from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import SHOP_DATA from '../../shop.data.js'

class ShopPage extends React.Component{
  constructor(){
    super()

    this.state = {
      categories : SHOP_DATA
    }
  }

  render(){
    return(
      this.state.categories.map(({id,...otherProps})=><CollectionPreview key={id} {...otherProps} />)
    )
  }
}

export default ShopPage