import React from 'react'
import './menu-item.styles.scss'
import {withRouter} from 'react-router-dom'

const MenuItem = ({title, imgUrl, size, linkUrl, history, match}) =>{
  return(
    <div 
      className={`menu-item ${size}`} 
      onClick={()=> history.push(`${match.url}${linkUrl}`)}
    >
      <div
        style={{
          backgroundImage : `url(${imgUrl})`
        }}
        className='pic'
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <p className='subtitle'>Shop Now</p>
      </div>
    </div>
  )
}

export default withRouter(MenuItem)