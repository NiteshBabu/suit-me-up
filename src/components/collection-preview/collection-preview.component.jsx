import React from 'react'
import './collection-preview.styles.scss'
import ItemPreview from '../item-preview/item-preview.component'

const CollectionPreview = ({title, items}) =>{
  return(
    <div className='collection-preview'>
      <h1 className='title'>{title}</h1>
      <div className='items'>
        {items
            .filter((item, index) => index < 4 )
            .map(({id, ...item}) => <ItemPreview key={id} {...item}/>)
        }
      </div>
    </div>
  )
}


export default CollectionPreview