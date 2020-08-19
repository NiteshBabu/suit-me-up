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
            .map((item) => <ItemPreview key={item.id} item={item}/>)
        }
      </div>
    </div>
  )
}


export default CollectionPreview