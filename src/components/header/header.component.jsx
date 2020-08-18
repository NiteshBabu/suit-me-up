import React from 'react'
import {Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'


import './header.styles.scss'

const Header = ({currentUser}) =>{
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
      </ul>
    </div>

  )
}

const mapStateToProps = state =>({
  currentUser : state.user.currentUser
})

export default connect(mapStateToProps)(Header)