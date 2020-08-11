import React, {Component} from 'react'
import './Shop.styles.scss' 
import Directory from './components/directory-menu/directory-menu.component'
 
class Shop extends Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div className='homepage'>
        <Directory />
      </div>
    )
  }
}

export default Shop