import React from 'react'
import './menu-item.styles.scss'

const MenuItem = ({title, imgUrl, size}) =>{
  return(
    <div 
      className={`menu-item ${size}`} 
    >
      <div
        style={{
          backgroundImage : `url(${imgUrl})`
        }}
        className='pic'
      />
      <div className='content'>
        <h1 class='title'>{title.toUpperCase()}</h1>
        <p class='subtitle'>Shop Now</p>
      </div>
    </div>
  )
}

export default MenuItem