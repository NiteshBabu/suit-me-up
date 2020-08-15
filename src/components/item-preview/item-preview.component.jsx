import React from 'react'
import './item-preview.styles.scss'

const ItemPreview = ({name, price, imageUrl}) =>{
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
    </div>
  )
}

export default ItemPreview