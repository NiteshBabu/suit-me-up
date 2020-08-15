import React from 'react'
import './item.styles.scss'

const Item = ({name, price, imageUrl}) =>{
  return (
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

export default Item