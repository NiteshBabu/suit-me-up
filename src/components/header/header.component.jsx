import React from 'react'
import {Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'

import './header.styles.scss'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = ({currentUser, hidden, toggleCartDropdown}) =>{
  return(
    <div className='header'>
      <Link className='option' to='/'>
        <span>Suit-Me-Up</span>
      </Link>
      <ul>
        <Link className='option' to='/'>Home</Link>
        <Link className='option' to='/shop'>Shop</Link>
        {
          currentUser ?
            <div className='option' onClick={()=> auth.signOut()}>Sign Out</div>
            : <Link className='option' to='/signin'>Sign In</Link>
        }
        <CartIcon />
      </ul>
      {
        hidden ? null : <CartDropdown />
      }
    </div>

  )
}

const mapStateToProps = ({user : {currentUser}, cart : {hidden}}) =>({
  currentUser,
  hidden,
})

export default connect(mapStateToProps)(Header)